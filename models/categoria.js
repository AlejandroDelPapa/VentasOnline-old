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
        },
        categoriaPadre: {
            type: DataTypes.INTEGER,
            reference: {
                model: Categoria,
                key: 'id'
            }
        }
    });

    //Categoria.hasMany(Categoria, {as: 'Subcategorias'});
    Categoria.belongsToMany(Categoria, {as: 'Hija', through: 'CategoriaHija'})
    
    return Categoria;
}