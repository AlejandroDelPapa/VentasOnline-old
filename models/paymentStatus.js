module.exports = function(sequelize, DataTypes) {
    var PaymentStatus = sequelize.define('PaymentStatus', {
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
    
    return PaymentStatus;
}