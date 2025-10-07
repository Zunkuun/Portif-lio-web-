
module.exports = (Sequelize,sequelize) => {
    const knowledge = sequelize.define('knowledges', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKEy: true,
        },
        name: {
            type: Sequelize.STRING,
            alloNull: false,
        }
    });
    return knowledge; 
}