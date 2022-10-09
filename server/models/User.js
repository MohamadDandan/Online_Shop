module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define("User", {

        UserName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Email: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        Password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Gender: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        Country: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        DOB: {
            type: DataTypes.DATE,
            allowNull: false,

        },
        State: {
            type: DataTypes.STRING,
            allowNull: false,

        }
    })
    User.associate = (models) => {
        User.hasMany(models.Likes, {
            onDelete: "cascade",
        });
        User.hasMany(models.OTest, {
            onDelete: "cascade",
        });



    }

    /* User.associate=(module)=>{
         User.hasMany(module)
     }*/
    return User;
}