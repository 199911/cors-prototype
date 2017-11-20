var express = require('express');
var router = express.Router();


router.get('/no', function(req, res, next) {
  res.send('Hello!');
});

router.get('/all', function(req, res, next) {
  res.set({
    'Access-Control-Allow-Origin': '*'
  });
  res.send('Hello!');
});

router.get('/local', function(req, res, next) {
  res.set({
    'Access-Control-Allow-Origin': 'local.example.com'
  });
  res.send('Hello!');
});

router.get('/remote', function(req, res, next) {
  res.set({
    'Access-Control-Allow-Origin': 'remote.example.com'
  });
  res.send('Hello!');
});

router.get('/invalid', function(req, res, next) {
  res.set({
    'Access-Control-Allow-Origin': '*.example.com'
  });
  res.send('Hello!');
});

module.exports = router;
