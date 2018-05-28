module.exports = app => {
    const Archivos = app.db.models.Archivos;
    app.route("/archivo")
        .get((req, res)=>{
           Archivos.findAll({})
            .then(result => res.json(result))
            .catch(error => {
                res.status(412).json({msg:error.message});
            });
        })
        .post((req, res)=>{
            Archivos.create(req.body)
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({msg:error.message});
                })
        });

    app.route("/archivo/:cod_Archivo")
        .get((req, res)=>{
            Archivos.findOne({where:req.params})
                .then(result => {
                    if(result){
                        res.json(result);
                    } else {
                        res.sendStatus(404);
                    }
                })
                .catch(error => {
                    res.status(412).json({msg: error.message});
                })
        })
        .put((req, res) => {
            Archivos.update(req.body, {where: req.params})
                .then(result => res.sendStatus(204))
                .catch(error => {
                    res.status(412).json({msg: error.message});
            });
        })
        .delete((req, res) => {
            Archivos.destroy({where: req.params})
                .then(result => res.sendStatus(204))
                .catch(error => {
                    res.status(412).json({msg: error.message});
                });
        });
};