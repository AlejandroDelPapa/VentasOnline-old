var express = require('express');
var router = express.Router();
var dbConnection = require('../dbConnection.js');

var Producto = dbConnection.Producto;

router.get('/', function(req, res, next) {
  Producto.findAll().then(function(productos) {
    res.send(productos);
  }).catch(function(err){
    res.status(500).send(err);
  });
});

router.post('/', function(req, res, next) {
  Producto.create(req.body).then(function(producto) {
    res.send('Product created!');
  }).catch(function(err) {
    res.status(500).send(err);
  });
});

router.get('/:id', function(req, res, next) {
  Producto.findOne({where: {id: req.params.id}}).then(function(producto) {
    res.send(producto);
  }).catch(function(err){
    res.status(500).send(err);
  });
});

router.put('/:id', function(req, res, next) {
  Producto.findOne({where: {id: req.params.id}}).then(function(producto) {
    producto.update(req.body).then(function(producto) {
      res.send("Product Updated!");
    }).catch(function(err) {
      res.status(500).send(err);
    });
  }).catch(function(err){
    res.status(500).send(err);
  });
});

router.delete('/:id', function(req, res, next) {
   Producto.findOne({where: {id: req.params.id}}).then(function(producto) {
      producto.destroy().then(function(producto) {
      res.send('Product Deleted!');
    }).catch(function(err) {
      res.status(500).send(err);
    });
   }).catch(function(err){
    res.status(500).send(err);
  });  
});

module.exports = router;
