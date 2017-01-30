module.exports = function(sequelize, DataTypes) {
    var Category = sequelize.import(__dirname + "/category")

    var Post = sequelize.define('Post', {
        Id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Title: {
            type: DataTypes.STRING
        },
        Description: {
            type: DataTypes.STRING
        },
        Cost: {
            type: DataTypes.DECIMAL
        },
        Visits: {
            type: DataTypes.INTEGER
        }
    });

    Category.hasMany(Post, {as: 'Posts'});
    
    return Post;
}