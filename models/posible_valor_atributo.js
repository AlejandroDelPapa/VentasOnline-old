module.exports = function(sequelize, DataTypes) {
    var Atributo = sequelize.import(__dirname + "/atributo")

    var PosibleValorAtributo = sequelize.define('posible_valor_atributo', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        valor: {
            type: DataTypes.INTEGER
        },
        idAtributo: {
            type: DataTypes.INTEGER,
            reference: {
                model: Atributo,
                key: 'id'
            }
        },
        tipo: {
            type: DataTypes.ENUM('texto' ,'entero', 'decimal')
        }
    });
    
    return PosibleValorAtributo;
}