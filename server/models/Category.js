module.exports = (sequelize, DataTypes) => {

    const Cate = sequelize.define("Cate", {

        Category: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    })
    Cate.associate = (models) => {
        Cate.hasMany(models.Posts, {

        })
    }
    return Cate;
}