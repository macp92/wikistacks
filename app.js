const express = require('express');
const app = express();
const main = require('./views/main');
const db = require('./models');



app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended:false}));

app.get('/', (req, res, next) => {
  res.send(main(''));
})


const PORT = 1234;

const init = async () => {
  await db.sync({force: true})


  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
}

init()
