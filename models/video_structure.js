const mongoose = require('mongoose')


let schema=mongoose.Schema({
    vid_name:String,
    vid_link:String,
    description:String,
    play_location:[
        {
            start:Number,
            end:Number,
            nfc:String,
        }
    ],
})
module.exports = mongoose.model('video_structure',schema)