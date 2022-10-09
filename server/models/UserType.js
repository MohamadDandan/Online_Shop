module.exports = (sequelize, DataTypes) => {

    const UserType = sequelize.define("UserType", {

        UserType: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    })
    UserType.associate = (models) => {
        UserType.hasMany(models.User, {

        })
    }
    return UserType;
}