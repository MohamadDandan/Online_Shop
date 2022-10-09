module.exports = (sequelize, DataTypes) => {

    const OTest = sequelize.define("OTest", {

        status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        comment: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        Address: {
            type: DataTypes.STRING,
            allowNull: true,
        }

    })
    OTest.associate = (models) => {
        OTest.hasMany(models.Test, {
            onDelete: "cascade",
        });
    }




    return OTest;
}