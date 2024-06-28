const express = require('express');
const router = express.Router();


router.get('/news', (req, res) => {

  res.send('This is the Home page.');
});

router.get('/about', (req, res) => {
 
  res.send('This is the About page.');
});

router.get('/contact', (req, res) => {

  res.send('This is the Contact page.');
});

router.get('/services', (req, res) => {

  res.send('This is the Services page.');
});

module.exports = router;
