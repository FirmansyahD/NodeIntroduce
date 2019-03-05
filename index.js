const express = require('express');
const app = express();

app.get('/test',function(request,response){
    response.send('abcdefg');
});
app.listen('8080');