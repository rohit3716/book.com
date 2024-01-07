const express = require('express');
const app = express();
const database = require('./config/database');

const userRoute = require("./routes/User");
const bookRoute = require("./routes/Book");

// const database = require('./config/database');
const cookieParser = require('cookie-parser');
const cors = require('cors');


require('dotenv').config();
const PORT = process.env.VITE_PORT;


//DB connect
database.connect();

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin:"http://localhost:3000",
        credentials:true,
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