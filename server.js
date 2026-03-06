const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");

const app = express();

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");

app.use(cors());
app.use(express.json());

connectDB();


app.get("/", (req, res) => {
  res.send("Backend Assignment API Running");
});

/* API Routes */

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/tasks", taskRoutes);

/* simple error handler */

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message || "Server Error"
  });
});

const PORT = process.env.PORT || 5000;

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});