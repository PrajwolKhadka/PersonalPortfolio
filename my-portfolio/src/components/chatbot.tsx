import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import cahtboticon from "../assets/chatbot.png";

interface Message {
  sender: "user" | "bot";
  text: string;
}

const Chatbot: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { sender: "bot", text: "Hi! Ask me anything about Prajwol's work 😊" }
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

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  const sendMessage = async () => {
    if (!input.trim() || botTyping) return;

    const userMessage = input.trim();
    setMessages((prev) => [...prev, { sender: "user", text: userMessage }]);
    setInput("");
    setBotTyping(true);

    try {
      const res = await fetch("https://personalportfolio-lhwo.onrender.com/api/chat", {
      // const res = await fetch("http://localhost:5000/api/chat", {
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
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-15 right-8 text-white w-32 h-32 rounded-full flex items-center justify-center text-3xl"
      >
        <img src={cahtboticon} className="w-15 h-15 sm:w-45 sm:h-40" alt="chatbot" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-24 right-6 w-80 h-96 bg-white shadow-2xl rounded-xl flex flex-col overflow-hidden border"
          >
            {/* Header */}
            <div className="bg-slate-900 text-white p-3 font-semibold flex justify-between items-center">
              <span>Chatbot Assistant 🐼</span>
              <button
                onClick={() => setOpen(false)}
                className="px-2 py-1"
              >
                ❌
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-gray-100">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`max-w-[70%] p-2 rounded-lg text-sm ${
                    msg.sender === "user"
                      ? "bg-slate-900 text-white ml-auto"
                      : "bg-white border"
                  }`}
                >
                  {msg.text}
                </div>
              ))}

              {botTyping && (
                <div className="flex gap-1 items-center bg-white border w-16 p-2 rounded-lg">
                  <span className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" />
                  <span className="w-2 h-2 rounded-full bg-gray-500 animate-bounce delay-150" />
                  <span className="w-2 h-2 rounded-full bg-gray-500 animate-bounce delay-300" />
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 flex gap-2 border-t bg-white">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                className="flex-1 border rounded-lg px-3 py-2 outline-none"
                placeholder="Type a message..."
                disabled={botTyping}
              />
              <button
                onClick={sendMessage}
                disabled={botTyping || !input.trim()}
                className="bg-slate-600 text-white px-4 py-2 rounded-lg disabled:opacity-50"
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;