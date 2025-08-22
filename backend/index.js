import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Root route
app.get("/", (req, res) => {
  console.log("Welcome to SecureAuthX backend.");
  res.send("Welcome to SecureAuthX backend.");
});

// Start server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
