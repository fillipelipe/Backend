const express = require('express');

const routerProdutos = require('./router')

const app = express();

app.use('/produtos', routerProdutos)

const PORT = 3000;

app.listen(PORT, () => {
  console.log('API está ON!');
});

module.exports = app;