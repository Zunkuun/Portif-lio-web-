module.exports = (Sequelize,sequelize) => {
    const keywords = sequelize.define('keywords',{
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true, // Ensures no duplicate keywords
        }
    });
    return keywords;
}