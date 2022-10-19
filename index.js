const express=require('express');
require('dotenv').config();
const cors=require('cors');
const mongoose = require("./shared");
const ShortUrl=require('./model/short')
const app=express();

// database connection
mongoose();

// middlewares
app.use(express.json());

app.use(cors())
app.use(express.urlencoded({extended:false}))

app.get('/get',async(req,res)=>{
    const shortUrls=await ShortUrl.find()
    res.send(shortUrls)
})
app.post('/shortUrls',async (req,res)=>{
await ShortUrl.create({full:req.body.fullUrl})
res.send("updated")
})

app.get('/:shortUrl', async (req, res) => {
    const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl })
    if (shortUrl == null) return res.sendStatus(404)
  
    shortUrl.clicks++
    shortUrl.save()
  
    res.redirect(shortUrl.full)
  })

  
app.listen(process.env.PORT || 5000);
console.log("hi")