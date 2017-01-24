var Sequelize = require('sequelize');
var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('./application.properties');

var sequelize = new Sequelize(properties.get('database.url'));

var Atributo = sequelize.import(__dirname + "/models/atributo")
var Categoria = sequelize.import(__dirname + "/models/categoria")
var Imagen = sequelize.import(__dirname + "/models/imagen")
var ProsibleValorAtributo = sequelize.import(__dirname + "/models/posible_valor_atributo")
var Producto = sequelize.import(__dirname + "/models/producto")
var Usuario = sequelize.import(__dirname + "/models/usuario")


Atributo.belongsToMany(Categoria, {through: 'AtributoCategoria'});
Categoria.belongsToMany(Atributo, {through: 'AtributoCategoria'});

Producto.belongsToMany(Categoria, {through: 'CategoriaProducto'});
Categoria.belongsToMany(Producto, {through: 'CategoriaProducto'});

sequelize.sync().then(function() {
 console.log('Databse synchronized!!');
});

module.exports.Atributo = Atributo;
module.exports.Categoria = Categoria;
module.exports.Imagen = Imagen;
module.exports.ProsibleValorAtributo = ProsibleValorAtributo;
module.exports.Producto = Producto;
module.exports.Usuario = Usuario;