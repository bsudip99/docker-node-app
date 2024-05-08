const express = require('express');

const app = express();

app.get('/', (req,res) => {
  res.send('<h2> Hello Docker learning </h2>');
})

app.listen(8081);