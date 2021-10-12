const express = require('express'); //requiring express to use it 
const app = express();
app.listen(3000, function() {
  console.log('listening on 3000')
})
// app.get(endpoint, callback);
app.get('/', function (req, res) {
res.send('Hello World')
})