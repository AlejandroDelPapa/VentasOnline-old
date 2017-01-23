module.exports = function(sequelize, DataTypes) {
    var Categoria = sequelize.import(__dirname + "/categoria")

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
        idCategoria: {
            type: DataTypes.INTEGER,
            reference: {
                model: Categoria,
                key: 'id'
            }
        },
        url: {
            type: DataTypes.STRING,
            isUrl: true
        }
    });
    
    return Producto;
}