const express = require('express');
const app = express();
const main = require('./views/main');


app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended:false}));

app.get('/', (req, res, next) => {
  res.send(main(''));
})

const PORT = 1234;
app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
