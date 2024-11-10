const express = require('express');
const app = express();
const database = require('./config/database');
const userRoute = require("./routes/User");
const bookRoute = require("./routes/Book");
const cookieParser = require('cookie-parser');
const cors = require('cors');

require('dotenv').config();
const PORT = process.env.PORT || 4000;

// DB connect
database.connect();

// Parse CORS origins from environment variable
const allowedOrigins = process.env.CORS_ORIGIN.split(',');

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin:process.env.CORS_ORIGIN,
        credentials: true,
        maxAge: 14400,
      })
)

// Routes
app.use("/api/v1/", userRoute);
app.use('/api/v1/auth/', bookRoute);
app.use('/api/v1/', bookRoute);

// Default route
app.get("/", (req, res) => {
    return res.json({
        success: true,
        message: 'Server is up and running....'
    });
});

app.listen(PORT, () => {
    console.log(`App is running at ${PORT}`);
});
