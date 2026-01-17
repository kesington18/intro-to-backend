import express from "express";
// routes import
import userRouter from "./routes/user.routes.js";

const app = express(); // create an express app
app.use(express.json());

// routes declaration
app.use("/api/v1/users", userRouter);


export default app;