module.exports = (sequelize, DataType) => {


    const Clasificaciones = sequelize.define("Clasificaciones", {
        
        cod_Clasificacion: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        tipo_Clasificacion: {
            type: DataType.STRING,
            allowNull: false
        }

    }, {
        timestamps: false
    });

        Clasificaciones.associate = models => {

            Clasificaciones.hasMany(models.Skills);


    };
    return Clasificaciones;
};