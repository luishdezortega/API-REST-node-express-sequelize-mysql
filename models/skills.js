module.exports = (sequelize, DataType) => {
    
    const Skills = sequelize.define("Skills", {
        
        artificio: {
            type: DataType.INTEGER,
            primaryKey:true,
            allowNull: false
        }

    }, {
        timestamps: false
    });
    Skills.associate = models => {
        
        Skills.belongsTo(models.Estudiantes);
        Skills.belongsTo(models.Clasificaciones);
        Skills.belongsTo(models.Competencias);
                
    };
    return Skills;
};