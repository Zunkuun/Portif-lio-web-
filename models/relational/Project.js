
module.exports = (Sequelize,sequelize) => {
    const projects = sequelize.define('projetos',{
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        link: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        resume: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    })
    return projects;
}