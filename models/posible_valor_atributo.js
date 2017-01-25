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
        }        
    });

    Atributo.hasMany(PosibleValorAtributo, {as: 'Valores'});
    
    return PosibleValorAtributo;
}