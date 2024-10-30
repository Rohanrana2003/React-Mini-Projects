import cors from 'cors'
import express from 'express'
import RSSParser from "rss-parser";

const feedURL = "https://netflixtechblog.com/feed";
const parser = new RSSParser();
let articles = [];

const parse = async url=>{
    const feed = await parser.parseURL(url);

    feed.items.forEach(e=>{
        articles.push({e});
    })
}

parse(feedURL);

let app = express();

app.use(cors());
app.get('/', (req, res)=>{
    res.send(articles);
})

const server = app.listen("4000", ()=>{
    console.log("RSS feed app listening at http://localhost:4000" )
})

export default server;