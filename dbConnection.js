var Sequelize = require('sequelize');
var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('./application.properties');

var sequelize = new Sequelize(properties.get('database.url'));

var Attribute = sequelize.import(__dirname + "/models/attribute");
var Category = sequelize.import(__dirname + "/models/category");
var Shipment = sequelize.import(__dirname + "/models/shipment");
var ShipmentStatus = sequelize.import(__dirname + "/models/shipmentStatus");
var PaymentStatus = sequelize.import(__dirname + "/models/paymentStatus");
var Image = sequelize.import(__dirname + "/models/image");
var Payment = sequelize.import(__dirname + "/models/payment");
var Product = sequelize.import(__dirname + "/models/product");
var Post = sequelize.import(__dirname + "/models/post");
var User = sequelize.import(__dirname + "/models/user");
var AttributeValue = sequelize.import(__dirname + "/models/attributeValue");
var Sale = sequelize.import(__dirname + "/models/sale");
var SaleProduct = sequelize.import(__dirname + "/models/saleProduct");
var UserVisits = sequelize.import(__dirname + "/models/userVisits");


Attribute.belongsToMany(Category, {through: 'AttributeCategory'});
Category.belongsToMany(Attribute, {through: 'AttributeCategory'});

Product.belongsToMany(AttributeValue, {through: 'ProductAttributeValue'});
AttributeValue.belongsToMany(Product, {through: 'ProductAttributeValue'});

Product.belongsToMany(Sale, {through: 'SaleProduct'});
Sale.belongsToMany(Product, {through: 'SaleProduct'});

User.belongsToMany(Post, {through: 'UserVisits'});
Post.belongsToMany(User, {through: 'UserVisits'});

sequelize.sync({force: "true"}).then(function() {
 console.log('Databse synchronized!!');
});

module.exports.Attribute = Attribute;
module.exports.Category = Category;
module.exports.Shipment = Shipment;
module.exports.ShipmentStatus = ShipmentStatus;
module.exports.PaymentStatus = PaymentStatus;
module.exports.Image = Image;
module.exports.Payment = Payment;
module.exports.Product = Product;
module.exports.Post = Post;
module.exports.User = User;
module.exports.AttributeValue = AttributeValue;
module.exports.Sale = Sale;
module.exports.SaleProduct = SaleProduct;
module.exports.UserVisits = UserVisits;