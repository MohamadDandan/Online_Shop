module.exports = (sequelize, DataTypes) => {

    const Comment = sequelize.define("Comment", {

        Comment: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        UserName: {
            type: DataTypes.STRING,
            allowNull: false,
        }

    })


    return Comment;
}