var express = require('express');
var router = express.Router();
var dbConnection = require('../dbConnection.js');

var Imagen = dbConnection.Imagen;

router.get('/', function(req, res, next) {
  Imagen.findAll().then(function(imagenes) {
    res.send(imagenes);
  }).catch(function(err){
    res.status(500).send(err);
  });
});

router.post('/', function(req, res, next) {
  Imagen.create(req.body).then(function(imagen) {
    res.send('Image created!');
  }).catch(function(err) {
    res.status(500).send(err);
  });
});

router.get('/:id', function(req, res, next) {
  Imagen.findOne({where: {id: req.params.id}}).then(function(imagen) {
    res.send(imagen);
  }).catch(function(err){
    res.status(500).send(err);
  });
});

router.put('/:id', function(req, res, next) {
  Imagen.findOne({where: {id: req.params.id}}).then(function(imagen) {
    imagen.update(req.body).then(function(imagen) {
      res.send("Image Updated!");
    }).catch(function(err) {
      res.status(500).send(err);
    });
  }).catch(function(err){
    res.status(500).send(err);
  });
});

router.delete('/:id', function(req, res, next) {
   Imagen.findOne({where: {id: req.params.id}}).then(function(imagen) {
      imagen.destroy().then(function(imagen) {
      res.send('Image Deleted!');
    }).catch(function(err) {
      res.status(500).send(err);
    });
   }).catch(function(err){
    res.status(500).send(err);
  });  
});

module.exports = router;
