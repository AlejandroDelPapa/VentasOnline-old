module.exports = function(sequelize, DataTypes) {
    var Producto = sequelize.import(__dirname + "/producto")

    var Imagen = sequelize.define('imagen', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING
        },
        descripcion: {
            type: DataTypes.STRING
        },
        idProducto: {
            type: DataTypes.INTEGER,
            reference: {
                model: Producto,
                key: 'id'
            }
        },
        url: {
            type: DataTypes.STRING,
            isUrl: true
        },
        orden: {
            type: DataTypes.INTEGER
        }
    });
    
    return Imagen;
}