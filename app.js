const express=require("express");
const https=require("https");
const app=express();
app.get("/",function(req,res){
    const url="https://api.openweathermap.org/data/2.5/weather?q=india&appid=45b12243db992b0874bda0b959d52407&units=metric"
    https.get(url,function(response){
        console.log(response.statusCode);
        response.on("data",function(data){
            const weatherdata= JSON.parse(data)
           const temp=weatherdata.main.feels_like
           console.log(temp);
           const description=weatherdata.weather[0].description
           res.send("The temperature in london is"+temp+ "degrees celcius");
        })
    })
   
})

