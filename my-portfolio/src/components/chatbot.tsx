import React, { useState, useEffect, useRef } from "react";

interface Message {
  sender: "user" | "bot";
  text: string;
}

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { sender: "bot", text: "Hi! Ask me anything about Prajwol's work 😊" },
  ]);
  const [input, setInput] = useState("");
  const [botTyping, setBotTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, botTyping]);

  const sendMessage = async () => {
    if (!input.trim() || botTyping) return;

    const userMessage = input.trim();
    setMessages((prev) => [...prev, { sender: "user", text: userMessage }]);
    setInput("");
    setBotTyping(true);

    try {
      const res = await fetch("https://personalportfolio-lhwo.onrender.com/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });

      if (!res.ok) throw new Error(`Server error: ${res.status}`);

      const data = await res.json();
      const botReply = data.response || "Sorry, I didn't get a response.";
      setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
    } catch (e) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Server error. Try again later ❌" },
      ]);
    }

    setBotTyping(false);
  };

  return (
    <section className="flex flex-col items-center px-5 sm:px-8 md:px-16 xl:px-24 2xl:px-32 py-10 md:py-12 md:min-h-[85vh]">
      {/* Heading */}
      <div className="text-center max-w-2xl mb-8">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl text-white font-bold leading-tight"
          style={{ fontFamily: "Poltawski Nowy, serif" }}
        >
          Chat with my Assistant
        </h1>
        <p
          className="mt-3 text-base sm:text-lg text-gray-300 leading-relaxed"
          style={{ fontFamily: "Merriweather, serif" }}
        >
          Ask about my projects, skills, education, or experience
        </p>
      </div>

      {/* Chat card */}
      <div className="relative w-full max-w-2xl p-3 rounded-2xl bg-gray-800 shadow-2xl shadow-teal-500/10">
        <div className="absolute inset-0 rounded-2xl border border-teal-500/50 pointer-events-none"></div>

        <div className="relative flex flex-col h-[65vh] sm:h-[60vh] rounded-xl overflow-hidden bg-gray-900">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`max-w-[75%] p-3 rounded-lg text-sm whitespace-pre-wrap ${
                  msg.sender === "user"
                    ? "bg-teal-600 text-white ml-auto"
                    : "bg-gray-800 text-gray-200 border border-white/10"
                }`}
              >
                {msg.text}
              </div>
            ))}

            {botTyping && (
              <div className="flex gap-1 items-center bg-gray-800 border border-white/10 w-16 p-3 rounded-lg">
                <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" />
                <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce delay-150" />
                <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce delay-300" />
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 flex gap-2 border-t border-white/10 bg-gray-800">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              className="flex-1 border border-white/10 bg-gray-900 text-white placeholder-gray-500 rounded-lg px-3 py-2 outline-none focus:border-teal-500/50"
              placeholder="Type a message..."
              disabled={botTyping}
            />
            <button
              onClick={sendMessage}
              disabled={botTyping || !input.trim()}
              className="bg-teal-600 hover:bg-teal-500 transition-colors text-white px-4 py-2 rounded-lg disabled:opacity-50"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatPage;