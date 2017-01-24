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

//  /api/bears	GET	Get all the bears.
//  /api/bears	POST	Create a bear.
//  /api/bears/:bear_id	GET	Get a single bear.
//  /api/bears/:bear_id	PUT	Update a bear with new info.
//  /api/bears/:bear_id	DELETE	Delete a bear.

module.exports = router;
