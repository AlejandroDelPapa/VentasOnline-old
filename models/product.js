module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.import(__dirname + "/post")

    var Product = sequelize.define('Product', {
        Id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Url: {
            type: DataTypes.STRING,
            isUrl: true
        },
        Stock: {
            type: DataTypes.INTEGER
        }
    });

    Post.hasMany(Product, {as: 'Products'});
    
    return Product;
}