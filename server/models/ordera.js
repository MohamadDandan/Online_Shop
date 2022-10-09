module.exports = (sequelize, DataTypes) => {

    const Ordera = sequelize.define("Ordera", {

        status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        comment: {
            type: DataTypes.STRING,
            allowNull: true,
        },





    })






    return Ordera;
}