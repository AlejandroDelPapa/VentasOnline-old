module.exports = function(sequelize, DataTypes) {
    var Categoria = sequelize.define('categoria', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING
        },
        descripcion: {
            type: DataTypes.STRING
        }
    });

    Categoria.hasMany(Categoria, {as: 'Subcategorias'});
    
    return Categoria;
}