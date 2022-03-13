const express = require("express");
const app = express();
const ytdl = require("ytdl-core");
const xvideos = require('@rodrigogs/xvideos');
const yts = require("yt-search");

app.set("view engine", "ejs");
app.use(express.static('public'))

// OUR ROUTES WILL GO HERE
app.get("/", async (req, res) => {
	return res.render("index");
});

app.get("/search", async (req, res) => { 
    const r = await yts( req.query.q )
    const h = r.videos.slice(0,1).map( v => v.url)
    res.redirect('/download?url=' + h[0]);
})

app.get('/nsfwx', async (req, res) => {
    const url = req.query.url;
    const details = await xvideos.videos.details({url: url});
    const video = details.files.high;
    console.log(video);
    res.redirect(video);
})

app.get("/yt", async (req, res) => {
	const v_id = req.query.url.split('v=')[1];
    const info = await ytdl.getInfo(req.query.url);
    const formatYT = info.formats.sort((a, b) => {
        return a.width > b.width;
    })
    const checkAudio = formatYT.filter(f => f.hasAudio == true);
    const checkVideo = checkAudio.filter(f => f.hasVideo == true);

    const format = checkVideo.filter(f => f.container == 'mp4');
    console.log(format)
    res.redirect(format[format.length - 1].url);
    /*return res.render("download", {
		url: "https://www.youtube.com/embed/" + v_id,
        info: info.formats.sort((a, b) => {
            return a.mimeType < b.mimeType;
        })
	});*/
    
});

app.listen(80, () => {
	console.log("Server is running on http://localhost:80");
});