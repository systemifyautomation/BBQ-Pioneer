# Live Chat Setup Guide - n8n Backend

Your BBQ Pioneer store now has a custom live chat solution powered by n8n workflows. This gives you complete control over chat handling, notifications, and data storage.

## Overview

The chat system consists of:
- **Frontend**: Custom React component with beautiful UI
- **Backend**: n8n workflow automation for message handling
- **Storage**: Your choice (Google Sheets, Database, Email, Slack, etc.)

## Frontend Setup (Already Done ✓)

The LiveChat component is already integrated into your site. You just need to configure the n8n webhook URL.

### Update Webhook URL

1. Open `src/components/LiveChat.jsx`
2. Find line 21 and update:
   ```javascript
   const N8N_WEBHOOK_URL = "https://your-n8n-instance.com/webhook/live-chat";
   ```
   Replace with your actual n8n webhook URL (see backend setup below)

## Backend Setup (n8n Workflow)

### Step 1: Install n8n

**Option A: Cloud Hosted (Recommended)**
- Go to [n8n.cloud](https://n8n.cloud) and sign up
- Choose a plan (Free tier available)
- You'll get a hosted instance like `https://your-name.app.n8n.cloud`

**Option B: Self-Hosted**
```bash
# Using Docker
docker run -it --rm \
  --name n8n \
  -p 5678:5678 \
  -v ~/.n8n:/home/node/.n8n \
  docker.n8n.io/n8nio/n8n

# Or using npm
npm install n8n -g
n8n start
```

### Step 2: Create the Chat Workflow

1. Log into your n8n instance
2. Click **"New Workflow"**
3. Name it "BBQ Pioneer Live Chat"

### Step 3: Build the Workflow

Add these nodes in sequence:

#### Node 1: Webhook (Trigger)
- **Type**: `Webhook`
- **HTTP Method**: `POST`
- **Path**: `live-chat`
- **Response Mode**: `Last Node`
- **Response Data**: `All Entries`

Save and copy the **Production URL** - this is your webhook URL to use in the frontend.

#### Node 2: Function - Parse Chat Data
```javascript
// Extract chat information
const sessionId = $json.sessionId;
const eventType = $json.eventType;
const message = $json.message;
const userName = $json.userName;
const userEmail = $json.userEmail;
const timestamp = $json.timestamp;
const url = $json.url;

return {
  json: {
    sessionId,
    eventType,
    message,
    userName,
    userEmail,
    timestamp,
    url,
    formattedTime: new Date(timestamp).toLocaleString()
  }
};
```

#### Node 3: Switch - Route by Event Type
- **Mode**: `Expression`
- **Value 1**: `{{$json.eventType}}`
- **Rules**:
  - Output 1: `chat_started`
  - Output 2: `message`
  - Output 3: `chat_closed`

#### Node 4a: Send to Google Sheets (Optional)
- **Operation**: `Append`
- **Document**: Select your Google Sheet
- **Sheet**: `ChatLogs`
- **Columns**: Map all fields (sessionId, userName, userEmail, message, timestamp, etc.)

#### Node 4b: Send Email Notification
- **To**: `support@bbqpioneer.com`
- **Subject**: `🔥 New Chat Message - BBQ Pioneer`
- **Email Type**: `HTML`
- **Body**:
```html
<h2>New Chat Message</h2>
<p><strong>From:</strong> {{$json.userName}} ({{$json.userEmail}})</p>
<p><strong>Session:</strong> {{$json.sessionId}}</p>
<p><strong>Time:</strong> {{$json.formattedTime}}</p>
<p><strong>Message:</strong></p>
<blockquote>{{$json.message}}</blockquote>
<p><strong>Page URL:</strong> {{$json.url}}</p>
```

#### Node 4c: Send to Slack (Optional)
- **Channel**: `#customer-support`
- **Message**:
```
🔥 *New Chat Message*
*From:* {{$json.userName}} ({{$json.userEmail}})
*Message:* {{$json.message}}
*Time:* {{$json.formattedTime}}
```

#### Node 5: Respond to Client
- **Type**: `Respond to Webhook`
- **Response Body**:
```json
{
  "status": "success",
  "reply": "Thanks for your message! Our team will respond shortly.",
  "sessionId": "={{$json.sessionId}}"
}
```

### Step 4: Activate the Workflow

1. Click **"Save"** in the top right
2. Toggle the workflow to **"Active"**
3. Copy the webhook URL from Node 1
4. Update it in your `LiveChat.jsx` file

## Advanced Configuration

### Auto-Reply with AI (OpenAI Integration)

Add after Node 2:

**Node: OpenAI**
- **Resource**: `Message`
- **Operation**: `Create`
- **Model**: `gpt-4`
- **System Message**: 
```
You are a helpful customer service agent for BBQ Pioneer, a premium grill company. 
Be friendly, knowledgeable about BBQ grills and smokers, and help customers with 
product questions, shipping inquiries, and troubleshooting.
```
- **User Message**: `={{$json.message}}`

Update Node 5 response:
```json
{
  "status": "success",
  "reply": "={{$json.choices[0].message.content}}",
  "sessionId": "={{$node["Function"].json.sessionId}}"
}
```

### Store in Database (MySQL/PostgreSQL)

**Node: Database**
- **Operation**: `Insert`
- **Table**: `chat_messages`
- **Columns to Match**: All chat fields

### Send to CRM (HubSpot/Salesforce)

Add a node to create a contact/ticket in your CRM automatically.

### WhatsApp/SMS Notifications

Use Twilio node to send SMS alerts when new chats arrive.

## Testing

1. Run `npm run dev` on your site
2. Click the chat bubble
3. Fill in name/email and start chatting
4. Check your n8n workflow execution log
5. Verify notifications arrive (email/Slack/etc.)

## Customization

### Change Chat Colors

In `LiveChat.jsx`, modify the Tailwind classes:
- `bg-fire-600` → Your brand color
- `bg-fire-gradient` → Your gradient

### Add File Upload

Add file input in the chat form and handle in n8n with binary data.

### Business Hours

Add logic in n8n to check time and send different responses:
```javascript
const now = new Date();
const hour = now.getHours();
const isBusinessHours = hour >= 9 && hour < 18; // 9AM - 6PM

return {
  json: {
    ...input,
    isBusinessHours,
    autoReply: isBusinessHours 
      ? "We'll respond shortly!" 
      : "We're offline. We'll get back to you when we're online (9AM-6PM MT)"
  }
};
```

### Chat History

Store messages in a database and load previous chat history when user returns using the same email.

## Cost Considerations

**n8n Cloud Pricing:**
- Free: 5,000 workflow executions/month (plenty for starting out)
- Starter: $20/month - 100,000 executions
- Pro: $50/month - Unlimited

**Self-Hosted:**
- Free forever
- You only pay for server hosting (as low as $5-10/month on DigitalOcean/Linode)

## Troubleshooting

**Chat not appearing:**
- Check that LiveChat component is in App.jsx
- Verify browser console for errors

**Webhook not receiving:**
- Make sure n8n workflow is Active
- Check webhook URL is correct (production URL, not test URL)
- Verify CORS is enabled on n8n

**Messages not sending:**
- Check browser Network tab for failed requests
- Verify n8n workflow execution logs
- Check for JavaScript errors in console

## Security

1. **Rate Limiting**: Add rate limiting in n8n to prevent spam
2. **Input Validation**: Validate email format and sanitize messages
3. **HTTPS**: Always use HTTPS for webhook URL
4. **Authentication**: Add API key if needed for extra security

## Support Resources

- **n8n Documentation**: https://docs.n8n.io
- **n8n Community**: https://community.n8n.io
- **Video Tutorials**: https://www.youtube.com/@n8n

---

**Pro Tip**: Start simple with email notifications, then gradually add more integrations as you see what works for your business!
