require("dotenv").config();

const app = require("./src/app")
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
