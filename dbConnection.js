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

//Categoria.create({
//    nombre: 'Computacion'
//}).then(function(categoria){
//    return Producto.create({
//        titulo: 'Mac Pro',
//        descripcion: 'Mac Pro traida de usa',
//        url: 'http://mercadolibre.com.ar'
//    }).then(function(producto){
//        return categoria.addProducto(producto);
//    })
//})

// Categoria.findOne().then(function(categoria) {
//    return Categoria.create({
//        nombre: 'Asus'
//    }).then(function(subCategoria) {
//        console.log('aca ta');
//        return categoria.setSubcategorias(subCategoria);
//    })
// })

// Categoria.findOne({where: {id: 1}}).then(function(categoria1) {
//     return Categoria.findOne({where: {id: 2}}).then(function(categoria2) {
//         return Categoria.findOne({where: {id: 3}}).then(function(categoria3) {
//             return categoria1.setSubcategorias([categoria2, categoria3]);
//         })
//     })    
// })