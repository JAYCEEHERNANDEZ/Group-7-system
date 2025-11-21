// server.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const loginRoute = require("./routes/login"); // import login route

app.use(cors());
app.use(bodyParser.json());

// Test endpoint
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Use login route
app.use("/login", loginRoute);

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
