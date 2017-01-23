module.exports = function(sequelize, DataTypes) {
    var Producto = sequelize.import(__dirname + "/producto")
    var Categoria = sequelize.import(__dirname + "/categoria")

    var CategoriaProducto = sequelize.define('categoria_producto', {
        idCategoria: {
            type: DataTypes.INTEGER,
            reference: {
                model: Categoria,
                key: 'id'
            }
        },
        idProducto: {
            type: DataTypes.INTEGER,
            reference: {
                model: Producto,
                key: 'id'
            }
        }
    });
    
    return CategoriaProducto;
}