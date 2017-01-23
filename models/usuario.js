module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nickname: {
            type: DataTypes.STRING,
            unique: true
        },
        nombre: {
            type: DataTypes.STRING
        },
        apellido: {
            type: DataTypes.STRING
        },
        domicilio: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true
            },
            unique: true
        },
        sexo: {
            type: DataTypes.ENUM('M', 'F')
        },
        fechaNacimiento: {
            type: DataTypes.DATE
        },
        dni: {
            type: DataTypes.STRING,
            unique: true
        },
        ciudad: {
            type: DataTypes.STRING
        },
        partido: {
            type: DataTypes.STRING
        },
        codigoPostal: {
            type: DataTypes.STRING
        },
        telefonoFijo: {
            type: DataTypes.STRING
        },
        telefonoMovil: {
            type: DataTypes.STRING
        },
        contraseña: {
            type: DataTypes.STRING
        },
        administrador: {
            type: DataTypes.BOOLEAN
        }
    }, {
        underscored: true,
        //defaultScope: {
        //    include: [{model: Job}]
        //}
    });
    
    //User.belongsTo(Job);
    
    return User;
}