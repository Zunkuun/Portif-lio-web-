const Sequelize = require('sequelize');

const sequelize = new Sequel(
    'projetoufpr', 'postgres', '',{
    host: 'localhost',
    dialect: 'postgres',
    }
)

var db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;