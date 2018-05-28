module.exports = app => {
    app.db.sequelize.sync().done(() => {
        app.listen(app.get("port"), ()=>{
            console.log(`Servidor en linea en el puerto ${app.get("port")}`);
        });
    });    
};