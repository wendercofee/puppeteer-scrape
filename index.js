const express = require("express");
const {scrapeLogic} = require("./scrape/scrapeLogic");
const app = express();

const PORT = process.env.PORT || 4000;


app.get("/scrape", (req,res)=>{
    scrapeLogic(res);
})

app.get("/", (req,res) =>{
    res.send("Puppy server esta rodando!");
})

app.listen(PORT, () =>{
    console.log(`Escutando na porta ${PORT}`);
})

