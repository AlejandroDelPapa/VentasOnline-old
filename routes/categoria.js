var express = require('express');
var router = express.Router();
var dbConnection = require('../dbConnection.js');

var Categoria = dbConnection.Categoria;

router.get('/', function(req, res, next) {
  Categoria.findAll().then(function(categorias) {
    res.send(categorias);
  }).catch(function(err){
    res.status(500).send(err);
  });
});

router.post('/', function(req, res, next) {
  Categoria.create(req.body).then(function(categoria) {
    res.send('Category created!');
  }).catch(function(err) {
    res.status(500).send(err);
  });
});

router.get('/:id', function(req, res, next) {
  Categoria.findOne({where: {id: req.params.id}}).then(function(categoria) {
    res.send(categoria);
  }).catch(function(err){
    res.status(500).send(err);
  });
});

router.put('/:id', function(req, res, next) {
  Categoria.findOne({where: {id: req.params.id}}).then(function(categoria) {
    categoria.update(req.body).then(function(categoria) {
      res.send("Category Updated!");
    }).catch(function(err) {
      res.status(500).send(err);
    });
  }).catch(function(err){
    res.status(500).send(err);
  });
});

router.delete('/:id', function(req, res, next) {
   Categoria.findOne({where: {id: req.params.id}}).then(function(categoria) {
      categoria.destroy().then(function(categoria) {
      res.send('Category Deleted!');
    }).catch(function(err) {
      res.status(500).send(err);
    });
   }).catch(function(err){
    res.status(500).send(err);
  });  
});

module.exports = router;
