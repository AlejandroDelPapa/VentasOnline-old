module.exports = function(sequelize, DataTypes) {
    var Attribute = sequelize.import(__dirname + "/attribute")

    var AttributeValue = sequelize.define('AttributeValue', {
        Id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Value: {
            type: DataTypes.STRING
        }        
    });

    Attribute.hasMany(AttributeValue, {as: 'values'})
    
    return AttributeValue;
}