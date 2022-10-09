module.exports = (sequelize, DataTypes) => {

    const Test = sequelize.define("Test", {

        Qun: {
            type: DataTypes.STRING,
            allowNull: false,
        },


    })



    return Test;
}