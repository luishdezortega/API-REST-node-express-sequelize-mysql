module.exports = (sequelize, DataType) => {

    const Competencias = sequelize.define("Competencias", {
        
        cod_Competencia: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataType.STRING,
            allowNull:true
           
        }
    }, {
        timestamps: false
    });
 

        Competencias.associate = models => {
            
        Competencias.hasMany(models.Skills);
        Competencias.hasOne(models.Alertas);
        Competencias.hasMany(models.Archivos);
    };
    
    return Competencias;
};