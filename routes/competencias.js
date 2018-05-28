module.exports = app => {
    const Competencias = app.db.models.Competencias;
    app.route("/competencia")
        .get((req, res)=>{
           Competencias.findAll({})
            .then(result => res.json(result))
            .catch(error => {
                res.status(412).json({msg:error.message});
            });
        })
        .post((req, res)=>{
            Competencias.create(req.body)
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({msg:error.message});
                })
        });

    app.route("/competencia/:cod_Competencia")
        .get((req, res)=>{
            Competencias.findOne({where:req.params})
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
            Competencias.update(req.body, {where: req.params})
                .then(result => res.sendStatus(204))
                .catch(error => {
                    res.status(412).json({msg: error.message});
            });
        })
        .delete((req, res) => {
            Competencias.destroy({where: req.params})
                .then(result => res.sendStatus(204))
                .catch(error => {
                    res.status(412).json({msg: error.message});
                });
        });
};