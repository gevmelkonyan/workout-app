// This will create a table in MySQL Workbench
module.exports = (sequelize, DataTypes) => {

    const Comments = sequelize.define("Comments", {
        
        commentBody: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    return Comments;
};