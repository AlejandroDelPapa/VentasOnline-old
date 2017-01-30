module.exports = function(sequelize, DataTypes) {
    var Category = sequelize.define('Category', {
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

    Category.hasMany(Category, {as: 'Subcategories'});
    
    return Category;
}