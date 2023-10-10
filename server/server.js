import express from "express";
import cors from "cors";

const app = express();
const port = 80;


app.use(cors())

app.use("/", express.static("./public/"));
app.use("/websitestyleguide", express.static("./projects/websitestyleguide"));

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});