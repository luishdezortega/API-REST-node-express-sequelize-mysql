module.exports = app => {
    const Horarios = app.db.models.Horarios;
    app.route("/horario")
        .get((req, res)=>{
           Horarios.findAll({})
            .then(result => res.json(result))
            .catch(error => {
                res.status(412).json({msg:error.message});
            });
        })
        .post((req, res)=>{
            Horarios.create(req.body)
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({msg:error.message});
                })
        });

    app.route("/horario/:cod_Horario")
        .get((req, res)=>{
            Horarios.findOne({where:req.params})
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
            Horarios.update(req.body, {where: req.params})
                .then(result => res.sendStatus(204))
                .catch(error => {
                    res.status(412).json({msg: error.message});
            });
        })
        .delete((req, res) => {
            Horarios.destroy({where: req.params})
                .then(result => res.sendStatus(204))
                .catch(error => {
                    res.status(412).json({msg: error.message});
                });
        });
};