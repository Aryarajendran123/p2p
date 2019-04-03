const express = require("express");
const SomeModel=require("./Data");
const bodyParser = require("body-parser");
const path = require('path');
const mongoose = require("mongoose");


const API_PORT = 5800;

const app = express();

const dbRoute = "mongodb+srv://arya_rajendran:S6xam@june@cluster0-0ermz.mongodb.net/test?retryWrites=true";

mongoose.connect(
    dbRoute,
    { useNewUrlParser: true }
  );
  
  let db = mongoose.connection;
  
  db.once("open", () => console.log("connected to the database"));
  // db.createCollection("testmongo");
  
  // checks if connection with the database is successful
  db.on("error", console.error.bind(console, "MongoDB connection error:"));
  app.use(bodyParser.json({limit: '10mb', extended: true}));
  app.use(bodyParser.urlencoded({limit: '10mb', extended: true, parameterLimit: 1000000}));

  app.post("/new", (req, res) => {
    let data = new SomeModel();
        const { username , password } = req.body;
        data.username =username;
        data.password =password; 
        data.save(err => {
            if (err) return res.json({ success: false, error: err });
            return res.json({ success: true });
    });
});
  app.get("/user", (req, res) => {
    SomeModel.find((err, somemodel) => {
    console.log("SomeModel>>>>>"+JSON.stringify(somemodel));
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: somemodel });
    });
  });
  
  app.post("/update", (req, res) => {
    var data ={ 
    username:req.body.username,
    password:req.body.password 
  };
  SomeModel.findOneAndUpdate({ password: req.body.password },data,function(err, password){
  console.log(password);
  if(err) {
  if (err) return res.send(err);
  } else {
  return res.json({ success: true, data : data});
  }
  });
  });
  
  app.delete("/delete/:password", (req, res) => {
  console.log(req.params.password);
  SomeModel.deleteOne({ password: req.params.password}, err => {
  if (err) return res.send(err);
  return res.json({ success: true });
  }); 
  });
  


        
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
  
