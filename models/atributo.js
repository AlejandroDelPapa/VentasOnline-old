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
        }
    });
    
    return Atributo;
}