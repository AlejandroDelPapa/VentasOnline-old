var express = require('express');
var router = express.Router();

var atributo = require('./atributo');
var categoria = require('./categoria');
var imagen = require('./imagen');
var posibleValorAtributo = require('./posibleValorAtributo');
var producto = require('./producto');
var usuario = require('./usuario');

router.use('/atributos', atributo);
router.use('/categorias', categoria);
router.use('/imagenes', imagen);
router.use('/posiblesValoresAtributos', posibleValorAtributo);
router.use('/productos', producto);
router.use('/usuarios', usuario);

module.exports = router;
