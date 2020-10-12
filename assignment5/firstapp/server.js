var express = require('express');
var app = express();
var port = 9800;



//get(default route)
app.get('/',(req,res) => {
    res.send("Hii to Expres")
})

app.get('/city',(req,res) => {
    res.send(city)
});

app.get('/rest',(req,res) => {
    res.send(restaurent)
})

app.listen(port,(err)=> {
    if(err) throw err;
    console.log(`Server is running on port ${port}`)
})