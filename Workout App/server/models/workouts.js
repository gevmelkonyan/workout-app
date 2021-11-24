// This will create a table in MySQL Workbench
module.exports = (sequelize, DataTypes) => {

    const workouts = sequelize.define("workouts", {
        
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        workoutText: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        username: {
            type: DataTypes.STRING,
            allowNull: false,
        }

    });

    // //will delete every commentBody associated to the workout (post)
    // workouts.associate = (models) => {
    //     workouts.hasMany(models.Comments, {
    //         onDelete: "cascade"
    //     });
    // };

    return workouts;
};