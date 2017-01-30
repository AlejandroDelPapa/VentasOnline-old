module.exports = function(sequelize, DataTypes) {
    var UserVisits = sequelize.define('UserVisits', {
        Id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Count: {
            type: DataTypes.INTEGER
        }
    });
    
    return UserVisits;
}