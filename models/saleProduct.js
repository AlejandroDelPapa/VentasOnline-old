module.exports = function(sequelize, DataTypes) {
    var SaleProduct = sequelize.define('SaleProduct', {
        Id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Amount: {
            type: DataTypes.INTEGER
        },
        Cost: {
            type: DataTypes.DECIMAL
        }
    });
    
    return SaleProduct;
}