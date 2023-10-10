import express from "express";
import fs from "node:fs/promises"

const app = express();
const port = 80;

app.use("/", express.static("./public/"));

app.use("/websitestyleguide", express.static("./projects/websitestyleguide"));

app.get("/websitestyleguide", async (req, res) => {
    let page = await fs.readFile("./projects/websiteStyleGuide/index.html", {encoding: "utf-8"});
    res.send(page)
})


app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});