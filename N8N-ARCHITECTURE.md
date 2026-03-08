# n8n Live Chat Architecture

## System Flow

```
┌─────────────────────────────────────────────────────────────┐
│                    BBQ Pioneer Website                       │
│                                                               │
│  ┌─────────────────────────────────────────────────────┐   │
│  │          LiveChat Component                          │   │
│  │  (Floating button in bottom right corner)           │   │
│  │                                                       │   │
│  │  • Beautiful custom UI                              │   │
│  │  • Collects: Name, Email                            │   │
│  │  • Real-time messaging                              │   │
│  │  • Session tracking                                 │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                            │
                            │ HTTPS POST Request
                            │ (JSON payload with chat data)
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                    n8n Workflow Engine                       │
│                                                               │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────┐  │
│  │   Webhook    │───▶│ Parse Data   │───▶│ Route Event  │  │
│  │   Trigger    │    │   Function   │    │    Switch    │  │
│  └──────────────┘    └──────────────┘    └──────────────┘  │
│                                                │              │
│                          ┌─────────────────────┼───────────┐ │
│                          ▼                     ▼           ▼ │
│                  ┌──────────────┐    ┌──────────────┐  ┌──┴───────┐
│                  │ Chat Started │    │   Message    │  │  Closed  │
│                  │   Handler    │    │   Handler    │  │ Handler  │
│                  └──────────────┘    └──────────────┘  └──────────┘
│                          │                     │           │        │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
        ┌───────────────────────────────────────────┐
        │      Notification Channels                │
        │                                           │
        │  📧 Email    💬 Slack    📊 Sheets       │
        │  💾 Database  🤖 AI      📱 SMS          │
        └───────────────────────────────────────────┘
```

## Data Flow

### 1. Customer Interaction
```javascript
{
  "sessionId": "session-1234567890-abc123",
  "eventType": "message",
  "message": "What's the warranty on the Titan Pro?",
  "userName": "John Doe",
  "userEmail": "john@example.com",
  "timestamp": "2026-03-08T14:30:00Z",
  "url": "https://bbqpioneer.com/product/titan-pro",
  "userAgent": "Mozilla/5.0..."
}
```

### 2. n8n Processing
- Receives webhook
- Parses and validates data
- Routes based on event type
- Executes configured actions

### 3. Response to Customer
```javascript
{
  "status": "success",
  "reply": "Thanks for your message! Our team will respond shortly. 🔥",
  "sessionId": "session-1234567890-abc123",
  "timestamp": "2026-03-08T14:30:01Z"
}
```

## Event Types

| Event Type | Trigger | Actions |
|------------|---------|---------|
| `chat_started` | User submits name/email | - Send welcome email<br>- Create CRM contact<br>- Log to database |
| `message` | User sends message | - Email notification<br>- Slack alert<br>- AI auto-reply |
| `chat_closed` | User closes chat | - Send transcript<br>- Update CRM<br>- Archive session |

## Quick Start Steps

1. **Install n8n** (5 min)
   - Cloud: Sign up at n8n.cloud
   - Self-hosted: `npm install n8n -g && n8n start`

2. **Import Workflow** (2 min)
   - Upload `n8n-chat-workflow.json`
   - Activate workflow
   - Copy webhook URL

3. **Update Frontend** (1 min)
   - Edit `src/components/LiveChat.jsx` line 21
   - Replace webhook URL
   - Deploy

4. **Test** (2 min)
   - Visit your site
   - Click chat button
   - Send test message
   - Check email/Slack/logs

Total setup time: **~10 minutes**

## Customization Examples

### Add AI Auto-Reply
Add OpenAI node after "Parse Data":
```javascript
// System message
You are a BBQ expert helping customers choose grills.
Be friendly and knowledgeable.

// User message
={{$json.message}}
```

### Save to Google Sheets
Add Google Sheets node:
- **Sheet**: ChatLogs
- **Columns**: sessionId, userName, userEmail, message, timestamp

### Send to Slack
Add Slack node:
- **Channel**: #customer-support
- **Message**: 
```
🔥 New message from {{$json.userName}}
{{$json.message}}
```

### Store in Database
Add PostgreSQL/MySQL node:
```sql
INSERT INTO chat_messages 
(session_id, user_name, user_email, message, timestamp)
VALUES ($1, $2, $3, $4, $5)
```

## Benefits of n8n Backend

✅ **Full Control**: Own your data, no third-party limits
✅ **Flexible**: Connect to any service (200+ integrations)
✅ **Scalable**: Handle thousands of chats
✅ **Private**: Customer data stays in your systems
✅ **Customizable**: Add AI, CRM, analytics, etc.
✅ **Cost Effective**: Free tier or self-host for $5/month

## Monitoring

View real-time chat activity:
1. Open n8n dashboard
2. Go to "Executions"
3. See all chat events with full data
4. Debug issues instantly

## Next Steps

- [ ] Set up n8n instance
- [ ] Import workflow JSON
- [ ] Configure email notifications
- [ ] Add Slack integration (optional)
- [ ] Test the chat system
- [ ] Add AI responses (optional)
- [ ] Connect to CRM (optional)

---

**Need Help?** Check LIVE-CHAT-SETUP.md for detailed instructions!
