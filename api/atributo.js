var express = require('express');
var router = express.Router();
var dbConnection = require('../dbConnection.js');

var Atributo = dbConnection.Atributo;

router.get('/', function(req, res, next) {
  Atributo.findAll().then(function(atributos) {
    res.send(atributos);
  }).catch(function(err){
    res.status(500).send(err);
  });
});

router.post('/', function(req, res, next) {
  Atributo.create(req.body).then(function(atributo) {
    res.send('Atribut created!');
  }).catch(function(err) {
    res.status(500).send(err);
  });
});

router.get('/:id', function(req, res, next) {
  Atributo.findOne({where: {id: req.params.id}}).then(function(atributo) {
    res.send(atributo);
  }).catch(function(err){
    res.status(500).send(err);
  });
});

router.put('/:id', function(req, res, next) {
  Atributo.findOne({where: {id: req.params.id}}).then(function(atributo) {
    atributo.update(req.body).then(function(atributo) {
      res.send("Atribut Updated!");
    }).catch(function(err) {
      res.status(500).send(err);
    });
  }).catch(function(err){
    res.status(500).send(err);
  });
});

router.delete('/:id', function(req, res, next) {
   Atributo.findOne({where: {id: req.params.id}}).then(function(atributo) {
      atributo.destroy().then(function(atributo) {
      res.send('Atribut Deleted!');
    }).catch(function(err) {
      res.status(500).send(err);
    });
   }).catch(function(err){
    res.status(500).send(err);
  });  
});

module.exports = router;
