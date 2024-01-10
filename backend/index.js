const express = require('express');
const app = express();
const database = require('./config/database');

const userRoute = require("./routes/User");
const bookRoute = require("./routes/Book");

// const database = require('./config/database');
const cookieParser = require('cookie-parser');
const cors = require('cors');


require('dotenv').config();
const PORT = process.env.PORT || 4000;


//DB connect
database.connect();

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin: JSON.parse(process.env.CORS_ORIGIN),
        credentials: true,
        maxAge: 14400,
      })
)

//routes
app.use("/api/v1/", userRoute);
app.use('/api/v1/auth/', bookRoute);
app.use('/api/v1/', bookRoute);

//default route 
app.get("/", ( req, res ) => {
    return res.json({
        success:true,
        message:'Server is up and running....'
    })
})

app.listen( PORT, () => {
    console.log(`App is running at ${PORT}`);
})