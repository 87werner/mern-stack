const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require('cors');
dotenv.config({path:'./.env'});
const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.json({extended: false}));
app.use(cors());
mongoose.connect( process.env.DB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then( () => console.log("MongoDB is connected"));
app.get('/', (req,res)=>{
    res.send("hello node fullstack project");
});
app.get("/api/users", (req,res)=>{
    res.json({
        users: [
            {
                name:"john",
                city:"manchester"
            },
            {
                name:"john",
                city:"manchester"
            }
        ]
    })
})
app.listen(4000, () => {
    console.log("server running on port 4000")
})
