module.exports = (sequelize, DataType) => {
    
    const Estudiantes = sequelize.define("Estudiantes", {
     
        cod_Estudiante: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement:false
        },
        
        nombre: {
            type: DataType.STRING,
            allowNull: true
        },

        apellido: {
            type: DataType.STRING,
            allowNull: true
        },

        contraseña: {
            type: DataType.STRING,
            allowNull: true
        }
        
    }, {
        timestamps: false
    });

        Estudiantes.associate = models => {
        Estudiantes.hasMany(models.Horarios);
        Estudiantes.hasMany(models.Skills);
        Estudiantes.hasMany(models.Alertas);
        Estudiantes.hasMany(models.Archivos);

    };
    return Estudiantes;
};