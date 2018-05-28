module.exports = (sequelize, DataType) => {
    
    const Horarios = sequelize.define("Horarios", {

 
        cod_Horario: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
      
        horaInicio: {
            type: DataType.DATE,
            allowNull: true,
            defaultValue: null
        },

        horaFinal: {
            type: DataType.DATE,
            allowNull: true,
            defaultValue: null
        },

        actividad: {
            type: DataType.STRING,
            allowNull: true
        }
        
    }, {
        timestamps: false
    });

        Horarios.associate = models => {
        Horarios.belongsTo(models.Estudiantes);

    };
    return Horarios;
};
