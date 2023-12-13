import express from "express"

const app = express();

const port = 9000;

app.use("/",(req,resp)=>{
    resp.json({message: "Hello from express app"});
});

app.listen(port ,(req , resp)=>{
    console.log(`your app is running on server ${port}`);
});
