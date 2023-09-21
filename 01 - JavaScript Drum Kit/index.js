const express = require('express');
const path = require('path');
const app = express();


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/:name', (req, res) => {
  res.sendFile(path.join(__dirname, `${req.params.name}`));
});


app.get('/:name/:name2', (req, res) => {
    res.sendFile(path.join(__dirname, `${req.params.name}`, `${req.params.name2}`));
  });

// app.get('/style.css', (req, res) => {
//     res.sendFile(path.join(__dirname, '/style.css'));
//   });

//   app.get('/background.jpg', (req, res) => {
//     res.sendFile(path.join(__dirname, '/background.jpg'));
//   });

//   app.get('/sounds/:name', (req, res) => {
//     res.sendFile(path.join(__dirname, `/sounds/${req.params.name}`));
//   });

app.listen(3001, function () {
    console.log("listening");
});