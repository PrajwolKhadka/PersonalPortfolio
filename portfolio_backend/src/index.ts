import express from "express";
import cors from "cors";
import chatBotRoutes from "./routes/chatbot_route";
import { PORT, NODE_ENV, CORS_ORIGIN } from "./config/constants";

const app = express();

// Middleware
app.use(cors({
  origin: CORS_ORIGIN
}));
app.use(express.json());

// Routes
app.use("/api/chat", chatBotRoutes);

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ 
    status: "ok", 
    environment: NODE_ENV,
    timestamp: new Date().toISOString() 
  });
});

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error("Error:", err);
  res.status(err.status || 500).json({
    error: err.message || "Internal server error"
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📝 Environment: ${NODE_ENV}`);
  console.log(`🔗 Health check: http://localhost:${PORT}/health`);
  console.log(`💬 Chat endpoint: http://localhost:${PORT}/api/chat`);
});