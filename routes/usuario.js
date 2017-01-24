var express = require('express');
var router = express.Router();
var dbConnection = require('../dbConnection.js');

var Usuario = dbConnection.Usuario;

router.get('/', function(req, res, next) {
  Usuario.findAll().then(function(usuarios) {
    res.send(usuarios);
  }).catch(function(err){
    res.status(500).send(err);
  });
});

router.post('/', function(req, res, next) {
  Usuario.create(req.body).then(function(usuario) {
    res.send('User created!');
  }).catch(function(err) {
    res.status(500).send(err);
  });
});

router.get('/:id', function(req, res, next) {
  Usuario.findOne({where: {id: req.params.id}}).then(function(usuario) {
    res.send(usuario);
  }).catch(function(err){
    res.status(500).send(err);
  });
});

router.put('/:id', function(req, res, next) {
  Usuario.findOne({where: {id: req.params.id}}).then(function(usuario) {
    usuario.update(req.body).then(function(usuario) {
      res.send("User Updated!");
    }).catch(function(err) {
      res.status(500).send(err);
    });
  }).catch(function(err){
    res.status(500).send(err);
  });
});

router.delete('/:id', function(req, res, next) {
   Usuario.findOne({where: {id: req.params.id}}).then(function(usuario) {
      usuario.destroy().then(function(usuario) {
      res.send('User Deleted!');
    }).catch(function(err) {
      res.status(500).send(err);
    });
   }).catch(function(err){
    res.status(500).send(err);
  });  
});

module.exports = router;
