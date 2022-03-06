const express = require("express");
const app = express();
const cors = require("cors");
const ytdl = require("ytdl-core");
const res = require("express/lib/response");
// OUR ROUTES WILL GO HERE

app.use(cors());

app.get('/video', (req,res) => {
    var URL = req.query.URL;
    //response header to stream mp4
    res.setHeader('Content-Type', 'video/mp4');
    //set response header cors to stream mp4
    res.setHeader('Access-Control-Allow-Origin', '*');
    //set response header to stream mp4
    //res.setHeader('Content-Disposition', 'attachment; filename="' + ytdl.getBasicInfo(URL).title + '.mp4"');
    //res.header('Content-Disposition', `attachment; filename="${ytname}.mp4"`);
    //setup ytdl to download the video stream to the response object (res) and set to 1080p video quality
    ytdl(URL, {
        filter: 'audioandvideo',
        quality: 'highestvideo',
        format: 'mp4'
    }).pipe(res);
});


app.listen(80, () => {
    console.log("Server is running on http://localhost:80");
});