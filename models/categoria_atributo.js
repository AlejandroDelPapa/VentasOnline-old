module.exports = function(sequelize, DataTypes) {
    var Atributo = sequelize.import(__dirname + "/atributo")
    var Categoria = sequelize.import(__dirname + "/categoria")

    var CategoriaAtributo = sequelize.define('categoria_atributo', {
        idCategoria: {
            type: DataTypes.INTEGER,
            reference: {
                model: Categoria,
                key: 'id'
            }
        },
        idAtributo: {
            type: DataTypes.INTEGER,
            reference: {
                model: Atributo,
                key: 'id'
            }
        }
    });
    
    return CategoriaAtributo;
}