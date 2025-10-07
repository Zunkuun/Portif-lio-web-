module.exports = (Sequelize,sequelize) =>{
    const Aluno = sequelize.define('aluno',{
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true, allownull: false,
            primaryKey: true
        },
        nome: {
            type: Sequelize.STRING,
            allownull: false
        },
        login: {
            type: Sequelize.STRING,
            allownull: false
        },
        Category: {
            type: Sequelize.STRING,
            defaultValue: 'aluno' //defining it is a student
        }
    });
    return Aluno;
}
