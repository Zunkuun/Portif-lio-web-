module.exports = (Sequelize,sequelize) => {
    const studentsKnowledge = sequelize.define('studentsKnowledges', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        level: {
            type: Sequelize.STRING,
            allowNull: false,
            validate:{
                min: 0,
                max: 10
            }
        }
    });
    return studentsKnowledge; 
}