import express from "express";
import cors from "cors";
import chatBotRoutes from "./routes/chatbot_route";
console.log("Running");
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/chat", chatBotRoutes);


const PORT = process.env.PORT || 5000;
app.listen(5000, ()=> console.log("Sever running on port 5000"))