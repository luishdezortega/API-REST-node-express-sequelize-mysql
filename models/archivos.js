module.exports = (sequelize, DataType) => {

    const Archivos = sequelize.define("Archivos", {
        cod_Archivo: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        titulo: {
            type: DataType.STRING,
            allowNull:true
        },

        archivo: {
            type: DataType.BLOB,
            allowNull: true
        }

    }, {
        timestamps: false
    });
    Archivos.associate = models => {
        Archivos.belongsTo(models.Competencias);
        Archivos.belongsTo(models.Estudiantes);
    };
    return Archivos;
};