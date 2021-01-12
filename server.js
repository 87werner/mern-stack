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

app.post("/register", (req, res) => {
    console.log(" reaching register on back end ")
    console.log(req.body)



    res.json({
        message: "user was registered"
    })
})

app.get("/api/users", (req,res)=>{

    // const usersDB = User.find();//we haven't set up the  models yet. all the users in the collection (in mongoDB) 
    
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


app.listen(5001, () => {
    console.log("server running on port 5000")
})
