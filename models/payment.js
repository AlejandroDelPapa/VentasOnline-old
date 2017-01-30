module.exports = function(sequelize, DataTypes) {
    var PaymentStatus = sequelize.import(__dirname + "/paymentStatus")

    var Payment = sequelize.define('Payment', {
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

    PaymentStatus.hasMany(Payment, {as: 'PaymentStatuses'});
    
    return Payment;
}