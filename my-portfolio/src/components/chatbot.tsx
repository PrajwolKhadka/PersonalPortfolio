import React, { useState, useEffect} from "react";
import { motion, AnimatePresence } from "framer-motion";
import cahtboticon from "../assets/chatbot.png";
interface Message {
  sender: "user" | "bot";
  text: string;
}

const Chatbot: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { sender: "bot", text: "Hi! Ask me anything 😊." }
  ]);

  const [input, setInput] = useState("");
  const [botTyping, setBotTyping] = useState(false);

//   const chatbotRef = useRef<HTMLDivElement>(null);


  const sendMessage = async () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text: input }]);

    const userMessage = input;
    setInput("");
    setBotTyping(true);

    try {
      const res = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await res.json();

      setMessages((prev) => [...prev, { sender: "bot", text: data.reply }]);
    } catch (e) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Server error. Try again later ❌" },
      ]);
    }

    setBotTyping(false);
  };


  useEffect(()=>{
    const handleEsc = (event: KeyboardEvent) => {
        if(event.key== "Escape") {
            setOpen(false)
        }
    };
  document.addEventListener("keydown", handleEsc);
  
  return()=> {
    document.removeEventListener("keydown", handleEsc);
  };
}, []);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-15 right-8 text-white w-32 h-32 rounded-full flex items-center justify-center text-3xl"
      >
        <img src={cahtboticon} className="w-15 h-15 sm:w-45 sm:h-40" alt="chatbot"/>
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
            <div className="bg-slate-900 text-white p-3 font-semibold flex justify-between items-center">
              <span>Chatbot Assistant 🐼</span>
              <button onClick={()=> setOpen(false)} 
                className="px-2 py-1"
            >❌
              </button>
            </div>
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
                  <span className="w-2 h-2 rounded-full bg-gray-500 animate-bounce"></span>
                  <span className="w-2 h-2 rounded-full bg-gray-500 animate-bounce delay-150"></span>
                  <span className="w-2 h-2 rounded-full bg-gray-500 animate-bounce delay-300"></span>
                </div>
              )}
            </div>
            <div className="p-3 flex gap-2 border-t bg-white">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                className="flex-1 border rounded-lg px-3 py-2 outline-none"
                placeholder="Type a message..."
              />
              <button
                onClick={sendMessage}
                className="bg-slate-600 text-white px-4 py-2 rounded-lg"
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
