const express = require('express');
const router = express.Router();
const db = require('../models/index');
const {addPage} = require('../views');

router.get('/', async (req, res, next) => {
  res.redirect('..');
})

router.get('/add', async (req, res, next) => {
  res.send(addPage());
})

router.get('/:id', async (req, res, next) => {
  const pageId = req.params.id;
  res.send(db.pages.pageId);
})

router.post('/', async (req, res, next) => {
  res.json(req.body);
})


module.exports = router;
