const express=require("express");
const mysql=require("mysql");

const app=express();

var dbConfig={
    host:"localhost",
    user:"root",
    password:"",
    database:"nodejs"
}

var dbcon=mysql.createConnection(dbConfig);

dbcon.connect(function(err){
    if(err)
        console.log(err.message);
    else
        console.log("Connection  successful");
})

app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));



app.get("/",function(req,res){
    res.sendFile(__dirname+"/public/pages/index.html");
})

app.get("/about",function(req,res){
    res.sendFile(__dirname+"/public/pages/About.html");
})

app.get("/help",function(req,res){
    res.sendFile(__dirname+"/public/pages/help.html");
})

app.get("/result",function(req,res){
    res.sendFile(__dirname+"/public/pages/help.html");
})

app.listen(5000,function(){
    console.log("hello");
})
app.get('/show-food',function(req,res){
    
    dbcon.query("select * from shops where LOWER(itemname)=?",[req.query.thisFood],(err,result)=>{
        if(err)
            res.send(err.message);
        else
            res.send(result);
    })
})

app.get('/show-loc',function(req,res){
    
    dbcon.query("select * from shops where LOWER(location)=?",[req.query.thisLoc],(err,result)=>{
        if(err)
            res.send(err.message);
        else
            res.send(result);
    })
})

app.get('/show-shop',function(req,res){
    
    dbcon.query("select * from shops where LOWER(shopname)=?",[req.query.thisShop],(err,result)=>{
        if(err)
            res.send(err.message);
        else
            res.send(result);
    })
})