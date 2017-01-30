module.exports = function(sequelize, DataTypes) {
    var User = sequelize.import(__dirname + "/user")
    var Shipment = sequelize.import(__dirname + "/shipment")
    var Payment = sequelize.import(__dirname + "/payment")

    var Sale = sequelize.define('Sale', {
        Id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Date: {
            type: DataTypes.DATE
        },
        Cost: {
            type: DataTypes.DECIMAL
        },
        Status: {
            type: DataTypes.STRING
        }
    });

    User.hasMany(Sale, {as: 'Sales'});
    Shipment.hasOne(Sale);
    Payment.hasOne(Sale);
    
    return Sale;
}