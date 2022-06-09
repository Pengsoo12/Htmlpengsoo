import express from "express";

const app = express();

app.set("view engine","pug","html");
app.get("/",(req,res)=> {
    return res.render("index");
});

app.listen(4030, () => console.log("로그인완료"));
