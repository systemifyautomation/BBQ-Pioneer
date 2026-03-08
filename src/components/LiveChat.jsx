import { useState, useEffect, useRef } from "react";
import { FiMessageCircle, FiX, FiSend, FiMinimize2 } from "react-icons/fi";

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! Welcome to BBQ Pioneer! 🔥 How can I help you today?",
      sender: "agent",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [chatStarted, setChatStarted] = useState(false);
  const messagesEndRef = useRef(null);
  const [sessionId] = useState(() => `session-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`);

  // n8n webhook URL - replace with your actual n8n webhook URL
  const N8N_WEBHOOK_URL = "https://your-n8n-instance.com/webhook/live-chat";

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendToN8N = async (message, eventType = "message") => {
    try {
      const payload = {
        sessionId,
        eventType,
        message,
        userName,
        userEmail,
        timestamp: new Date().toISOString(),
        url: window.location.href,
        userAgent: navigator.userAgent,
      };

      const response = await fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const data = await response.json();
        return data;
      }
    } catch (error) {
      console.error("Failed to send message to n8n:", error);
    }
  };

  const handleStartChat = (e) => {
    e.preventDefault();
    if (userName.trim() && userEmail.trim()) {
      setChatStarted(true);
      sendToN8N(`User ${userName} (${userEmail}) started chat`, "chat_started");
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          text: `Great to meet you, ${userName}! What can I help you with?`,
          sender: "agent",
          timestamp: new Date(),
        },
      ]);
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Send to n8n
    const response = await sendToN8N(inputMessage);

    // Simulate agent response (you can customize this based on n8n response)
    setTimeout(() => {
      setIsTyping(false);
      const agentMessage = {
        id: Date.now() + 1,
        text: response?.reply || "Thanks for your message! Our team will respond shortly.",
        sender: "agent",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, agentMessage]);
    }, 1500);
  };

  const handleClose = async () => {
    try {
      await sendToN8N("Chat closed", "chat_closed");
    } catch (error) {
      console.log("Failed to send close event:", error);
    }
    setIsOpen(false);
    // Reset chat state
    setChatStarted(false);
    setMessages([
      {
        id: 1,
        text: "Hi! Welcome to BBQ Pioneer! 🔥 How can I help you today?",
        sender: "agent",
        timestamp: new Date(),
      },
    ]);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-fire-600 hover:bg-fire-700 text-white rounded-full p-4 shadow-2xl transition-all hover:scale-110 fire-glow"
        aria-label="Open live chat"
      >
        <FiMessageCircle size={24} />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
      </button>
    );
  }

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 bg-white rounded-2xl shadow-2xl transition-all ${
        isMinimized ? "w-80 h-16" : "w-96 h-[600px]"
      } flex flex-col`}
    >
      {/* Header */}
      <div className="bg-fire-gradient text-white p-4 rounded-t-2xl flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <FiMessageCircle size={20} />
          </div>
          <div>
            <h3 className="font-bold text-sm">BBQ Pioneer Support</h3>
            <p className="text-xs opacity-90">
              <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-1" />
              Online Now
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-2 hover:bg-white/30 rounded-lg transition-colors text-white"
            aria-label={isMinimized ? "Maximize" : "Minimize"}
            type="button"
          >
            <FiMinimize2 size={20} strokeWidth={2.5} />
          </button>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-white/30 rounded-lg transition-colors text-white"
            aria-label="Close chat"
            type="button"
          >
            <FiX size={22} strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {!chatStarted ? (
            /* Welcome Form */
            <div className="flex-1 p-6 flex flex-col justify-center">
              <h4 className="font-bold text-gray-900 text-lg mb-2">
                Welcome to BBQ Pioneer! 👋
              </h4>
              <p className="text-gray-600 text-sm mb-6">
                Please enter your details to start chatting with our team.
              </p>
              <form onSubmit={handleStartChat} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                    placeholder="John Doe"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-fire-500 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    required
                    placeholder="john@example.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-fire-500 text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-fire-gradient text-white font-bold py-3 rounded-lg hover:opacity-90 transition-opacity text-sm"
                >
                  Start Chat
                </button>
              </form>
            </div>
          ) : (
            <>
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${
                      msg.sender === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                        msg.sender === "user"
                          ? "bg-fire-600 text-white"
                          : "bg-gray-100 text-gray-900"
                      }`}
                    >
                      <p className="text-sm">{msg.text}</p>
                      <span className="text-xs opacity-70 mt-1 block">
                        {msg.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 rounded-2xl px-4 py-3">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" />
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-75" />
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-150" />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <form
                onSubmit={handleSendMessage}
                className="p-4 border-t border-gray-200"
              >
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-fire-500 text-sm"
                  />
                  <button
                    type="submit"
                    className="bg-fire-600 hover:bg-fire-700 text-white p-3 rounded-lg transition-colors"
                    aria-label="Send message"
                  >
                    <FiSend size={18} />
                  </button>
                </div>
              </form>
            </>
          )}
        </>
      )}
    </div>
  );
}
