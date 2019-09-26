const express = require('express');
const router = express.Router();
const {db, Page, User} = require('../models');
const {addPage, wikiPage} = require('../views');


router.get('/', async (req, res, next) => {
  res.redirect('..');
})

router.get('/add', async (req, res, next) => {
  res.send(addPage());
})

router.get('/:slug', async (req, res, next) => {
  const pageId = req.params.slug;
  const foundPage = await Page.findOne( {
    where: {slug: pageId}
  })
  try{res.send(wikiPage(foundPage));
  } catch (e) {console.log(e)}
})

router.post('/', async (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;


  const page = new Page({
    title,
    content,
  });

  // console.log(page)

  try {
    await page.save();
    res.redirect(`/wiki/${page.slug}`);
  } catch (error) { next(error) }
})


module.exports = router;
