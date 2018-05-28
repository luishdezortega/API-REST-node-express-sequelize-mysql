module.exports = app => {
    const Alertas = app.db.models.Alertas;
    app.route("/Alerta")
        .get((req, res)=>{
           Alertas.findAll({})
            .then(result => res.json(result))
            .catch(error => {
                res.status(412).json({msg:error.message});
            });
        })
        .post((req, res)=>{
            Alertas.create(req.body)
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({msg:error.message});
                })
        });

    app.route("/Alerta/:cod_Alerta")
        .get((req, res)=>{
            Alertas.findOne({where:req.params})
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
            Alertas.update(req.body, {where: req.params})
                .then(result => res.sendStatus(204))
                .catch(error => {
                    res.status(412).json({msg: error.message});
            });
        })
        .delete((req, res) => {
            Alertas.destroy({where: req.params})
                .then(result => res.sendStatus(204))
                .catch(error => {
                    res.status(412).json({msg: error.message});
                });
        });
};