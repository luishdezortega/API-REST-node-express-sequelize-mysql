module.exports = (sequelize, DataType) => {

    const Alertas = sequelize.define("Alertas", {
  
       cod_Alerta: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        descripcion: {
            type: DataType.STRING,
            allowNull: true

        },
        observacion: {
            type: DataType.STRING,
            allowNull: true
        },
        estado: {
            type: DataType.BOOLEAN,
            allowNull: true
        },
        cod_EstudianteAtendido: {
            type: DataType.INTEGER,
            allowNull: true
        },
        fecha_Inicio: {
             type: DataType.DATE,
             allowNull: true
        },
         fecha_Final: {
             type: DataType.DATE,
             allowNull: true
         }


    }, {
        timestamps: false
    });

    Alertas.associate = models => {

        Alertas.belongsTo(models.Competencias);
        Alertas.belongsTo(models.Estudiantes);

    }
    return Alertas;
};

