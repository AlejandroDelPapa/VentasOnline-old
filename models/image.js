module.exports = function(sequelize, DataTypes) {
    var Product = sequelize.import(__dirname + "/product")

    var Image = sequelize.define('Image', {
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
        },
        Url: {
            type: DataTypes.STRING,
            isUrl: true
        },
        SequenceNumber: {
            type: DataTypes.INTEGER
        }
    });

    Product.hasMany(Image, {as: 'Images'});
    
    return Image;
}