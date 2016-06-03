var express = require('express');
var router = express.Router();
var superpower = require('../models/superpower');

router.get('/', function (req, res) {
    superpower.find({}, function (err, powers) {
      if (err) {
        res.sendStatus(500);
        console.log(err);
        return;
      }

      res.send(powers);
    });
});

router.post('/', function (req, res) {

});



router.delete('/:id', function (req, res) {
  Movie.findByIdAndRemove(req.params.id, function (err) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    res.sendStatus(204);
  });
});



module.exports = router;
