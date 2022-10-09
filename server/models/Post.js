module.exports = (sequelize, DataTypes) => {

    const Posts = sequelize.define("Posts", {

        PostName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        PostPrice: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        PostDetail: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        PostRate: {
            type: DataTypes.STRING,
            allowNull: true,
        }

    })

    Posts.associate = (models) => {
        Posts.hasMany(models.Comment, {
            onDelete: "cascade",
        });
        Posts.hasMany(models.Likes, {
            onDelete: "cascade",
        });

        Posts.hasMany(models.Test, {
            onDelete: "cascade",
        });


    }


    return Posts;
}