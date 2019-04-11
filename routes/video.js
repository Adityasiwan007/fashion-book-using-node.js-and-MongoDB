var express = require('express');
var app = express();
var mongoose = require('mongoose');
var winston = require('winston');
var vid = require('../models/video_structure.js');
let Product = require('../models/video_pro_structure.js')
var ObjectId=mongoose.Types.ObjectId;
const config = require('../config')
var bodyParser = require('body-parser');


app.get('/links',async (req,res,next)=>{
    let pro_time = await vid.find()
    
    res.send(pro_time);
});

app.get('/:video_id',async (req,res,next)=>{
    let {video_id} = req.params
    winston.log('info',`video id ${video_id}`)
    let pro = await vid.findOne({vid_name:video_id})
    res.send(pro);
});

app.get('/prodcuts/nfcids',async (req,res,next)=>{
    let nfcIDs  = req.query.nfc
    winston.log('info',`loading product with nfc ids ${nfcIDs}`)
    nfcIDs = nfcIDs.split(",")
    let products = await Product.find({nfcCode:{$in:nfcIDs}})
    return res.json({success:true,object:products})
})
app.get('/',async (req,res,next)=>{
    let nfcs = req.query
    let x=nfcs[0]
    winston.log('info',`nfxs id ${x}`)
});
app.use('/', express.static(__dirname + '/public/spotlight/video/test.html'));
app.listen(3000);


