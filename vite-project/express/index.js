const express = require("express");
const app = express();
const PORT = 8081;
const banco = require("./banco.js")

app.get("/", (req, res) => {
    console.log('oi')
    res.json({ message: 'ok', array: [1,2,3,4,5,6,7,8,9,10] });
});

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.listen(PORT, () => {
    console.log(`Running in http://localhost:${PORT}`);
})

app.post("/users/:nome/:email/:senha", (req,res) =>{
    console.log(req.params)
})