module.exports = function(sequelize, DataTypes) {
    var ShipmentStatus = sequelize.import(__dirname + "/shipmentStatus")

    var Shipment = sequelize.define('Shipment', {
        Id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Address: {
            type: DataTypes.STRING
        },
        City: {
            type: DataTypes.STRING
        },
        Country: {
            type: DataTypes.STRING
        },
        PostalCode: {
            type: DataTypes.STRING
        },
        Fee: {
            type: DataTypes.DECIMAL
        }
    });

    ShipmentStatus.hasMany(Shipment, {as: 'Shipments'});
    
    return Shipment;
}