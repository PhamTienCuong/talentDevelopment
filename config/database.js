const Sequelize = require('sequelize');
var path        = require('path');

var config      = require('./config');

const sequelize = new Sequelize(
    config.db.dbname,
    config.db.user,
    config.db.password,
    {host:config.db.host, dialect: 'mysql'}
);

const Task = sequelize.define('task', {
    title: Sequelize.STRING,
    description: Sequelize.TEXT,
    deadline: Sequelize.DATE
  })
sequelize.sync();

sequelize.authenticate()
.then(() => console.log('ket noi thanh cong')
)
.catch(err => console.log(err.message)
);

var db  = {};
var arrModel = [{"name":"Users","file":"M_User"}];
arrModel.forEach(function(model){
    console.log(path.join(__dirname, '/../app/models/'+model.name+'.js'));
    db[model.name] = sequelize['import'](path.join(__dirname, '/../app/models/'+model.file+'.js'));
});
db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;
