module.exports = function(sequelize, DataTypes) {
    var Atributo = sequelize.define('atributo', {
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
        tipo: {
            type: DataTypes.ENUM('texto' ,'entero', 'decimal')
        }
    });
    
    return Atributo;
}