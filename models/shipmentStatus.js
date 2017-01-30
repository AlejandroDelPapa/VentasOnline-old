module.exports = function(sequelize, DataTypes) {
    var ShipmentStatus = sequelize.define('ShipmentStatus', {
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
        }
    });
    
    return ShipmentStatus;
}