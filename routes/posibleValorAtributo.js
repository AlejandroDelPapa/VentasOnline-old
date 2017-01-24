var express = require('express');
var router = express.Router();
var dbConnection = require('../dbConnection.js');

var PosibleValorAtributo = dbConnection.PosibleValorAtributo;

router.get('/', function(req, res, next) {
  PosibleValorAtributo.findAll().then(function(posiblesValoresAtributos) {
    res.send(posiblesValoresAtributos);
  }).catch(function(err){
    res.status(500).send(err);
  });
});

router.post('/', function(req, res, next) {
  PosibleValorAtributo.create(req.body).then(function(posibleValorAtributo) {
    res.send('posibleValorAtributo created!');
  }).catch(function(err) {
    res.status(500).send(err);
  });
});

router.get('/:id', function(req, res, next) {
  PosibleValorAtributo.findOne({where: {id: req.params.id}}).then(function(posibleValorAtributo) {
    res.send(posibleValorAtributo);
  }).catch(function(err){
    res.status(500).send(err);
  });
});

router.put('/:id', function(req, res, next) {
  PosibleValorAtributo.findOne({where: {id: req.params.id}}).then(function(posibleValorAtributo) {
    posibleValorAtributo.update(req.body).then(function(posibleValorAtributo) {
      res.send("posibleValorAtributo Updated!");
    }).catch(function(err) {
      res.status(500).send(err);
    });
  }).catch(function(err){
    res.status(500).send(err);
  });
});

router.delete('/:id', function(req, res, next) {
   PosibleValorAtributo.findOne({where: {id: req.params.id}}).then(function(posibleValorAtributo) {
      posibleValorAtributo.destroy().then(function(posibleValorAtributo) {
      res.send('posibleValorAtributo Deleted!');
    }).catch(function(err) {
      res.status(500).send(err);
    });
   }).catch(function(err){
    res.status(500).send(err);
  });  
});

module.exports = router;