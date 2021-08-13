var express = require('express');
var app = express();
app.get('/listAllchatapplication', function(req, res){
    res.send('Page Contains list of All chat users');
})
app.get('/chatUsers*', function(req, res){
    res.send('Request arrived for chatUser. Where * can be anything');
})
var serverInstance = app.listen(9006, function () {
    var hostaddr = serverInstance.address().address
    var hostaddr = serverInstance.address().port
    console.log("server running at http://%s:%s", hostaddr, portaddr)
})    
