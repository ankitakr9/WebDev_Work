const express = require("express");
const app = express();
//const path = require("path");
const port = 8080;



app.set("view engine", "ejs");
//app.set("view", path.join(__dirname, "/views"));
app.get("/", (req, res) =>{
    res.render("home.ejs");
});
app.get("/rolldice", (req, res) =>{
    let diceVal = Math.floor(Math.random() * 6 ) + 1;
    res.render("rollsdice.ejs" ,{diceVal});
});
/* app.get("/ig/:username", (req, res) =>{
    const followers = ["adam","steve", "bob"];
    let {username} =req.params;
    res.render("instagram.ejs",{username, followers});
}); */
app.get("/ig/:username", (req, res) =>{
    
    
    let {username} =req.params;
    const instaData = require("./data.json");
    const data = instaData [username];
    //console.log(data);
    if(data){
        res.render("instagram.ejs", {data});
    }else{
        res.render("error.ejs");
    }
    //res.render("instagram.ejs",{data});
});

app.listen(port , () => {
    console.log(`Listening on port ${port}`);
});