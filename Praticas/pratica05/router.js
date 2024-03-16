const express = require('express');

const router = express.Router();

const produtos = [];

router.get('/produtos', (req, res) => {
    res.json(produtos);
  });

module.exports = router;