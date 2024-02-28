var express = require('express');
const path = require('path');
const sharp = require('sharp');
const fs = require('fs')
var app = express();

const IMG_LOCAL_PATH = path.join(__dirname, 'public');

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomFileName(dirPath){
  let files = fs.readdirSync(dirPath);
  return files[getRandomInt(files.length)];
}

app.get('/:id/:width?/:height?', function (req, res) {

  const id = req.params.id === 'random' ? getRandomFileName(IMG_LOCAL_PATH) : req.params.id;
  const width = Number(req.params.width)  || 200;
  const height = Number(req.params.height)  || 200;

  try{
    imagePath = path.join(IMG_LOCAL_PATH, `${id}`);
  }catch{
    console.error('file not found');
  }

  sharp(imagePath).resize({width,height}).toFormat('jpeg').toBuffer()
  .then((imageBuffer) => {
    res.set('Content-Type', 'image/jpeg');
    res.send(imageBuffer);
  })
  .catch((err) => {
    console.error(err);
    res.status(500).send('Internal Server Error');
  });
})


var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("listening at", host, port)
})
