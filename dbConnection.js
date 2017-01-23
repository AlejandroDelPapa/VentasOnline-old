var Sequelize = require('sequelize');
var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('../application.properties');

var sequelize = new Sequelize(properties.get('database.url'));

var Atributo = sequelize.import(__dirname + "/models/atributo")
var Categoria = sequelize.import(__dirname + "/models/categoria")
var CategoriaAtributo = sequelize.import(__dirname + "/models/categoria_atributo")
var Imagen = sequelize.import(__dirname + "/models/imagen")
var ProsibleValorAtributo = sequelize.import(__dirname + "/models/posible_valor_atributo")
var Producto = sequelize.import(__dirname + "/models/producto")
var Usuario = sequelize.import(__dirname + "/models/usuario")

sequelize.sync().then(function() {
  console.log('Databse synchronized!!');
});


//User.create({
//    firstName: 'Aleandro',
//    lastName: 'Del Papa',
//    address: 'La Rioja 4041',
//    birthday: new Date(1989, 01, 09),
//    jobId: 1
//})

//User.findOne().then(function(user) {
//    console.log(user.dataValues);
//    console.log('ahora si');
//    console.log(user.job.dataValues);    
//});

/*Job.findAll().then(function(jobs) {
    for(var i = 0; i < jobs.length; i++) {
        console.log(jobs[i].dataValues);
    }    
})*/