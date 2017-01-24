module.exports = function(sequelize, DataTypes) {
    var Producto = sequelize.define('producto', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        titulo: {
            type: DataTypes.STRING
        },
        descripcion: {
            type: DataTypes.STRING
        },
        url: {
            type: DataTypes.STRING,
            isUrl: true
        }
    });
    
    return Producto;
}