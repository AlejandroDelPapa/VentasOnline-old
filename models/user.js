module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
        Id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Nickname: {
            type: DataTypes.STRING,
            unique: true
        },
        FirstName: {
            type: DataTypes.STRING
        },
        LastName: {
            type: DataTypes.STRING
        },
        Address: {
            type: DataTypes.STRING
        },
        Email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true
            },
            unique: true
        },
        Sex: {
            type: DataTypes.ENUM('M', 'F')
        },
        Birthday: {
            type: DataTypes.DATE
        },
        Dni: {
            type: DataTypes.STRING,
            unique: true
        },
        City: {
            type: DataTypes.STRING
        },
        State: {
            type: DataTypes.STRING
        },
        PostalCode: {
            type: DataTypes.STRING
        },
        Phone: {
            type: DataTypes.STRING
        },
        MobilePhone: {
            type: DataTypes.STRING
        },
        Password: {
            type: DataTypes.STRING
        },
        IsAdmin: {
            type: DataTypes.BOOLEAN
        }
    });
    
    return User;
}