module.exports = function(sequelize, DataTypes) {
    var Attribute = sequelize.define('Attribute', {
        Id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Name: {
            type: DataTypes.STRING
        },
        Description: {
            type: DataTypes.STRING
        },
        Type: {
            type: DataTypes.ENUM('STRING' ,'INTEGER', 'DOUBLE')
        }
    });
    
    return Attribute;
}