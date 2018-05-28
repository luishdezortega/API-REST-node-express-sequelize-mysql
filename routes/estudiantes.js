module.exports = app => {
    const Estudiantes = app.db.models.Estudiantes;
    app.route("/Estudiante")
        .get((req, res)=>{
           Estudiantes.findAll({})
            .then(result => res.json(result))
            .catch(error => {
                res.status(412).json({msg:error.message});
            });
        })
        .post((req, res)=>{
            Estudiantes.create(req.body)
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({msg:error.message});
                })
        });

    app.route("/Estudiante/:cod_Estudiante")
        .get((req, res)=>{
            Estudiantes.findOne({where:req.params})
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
            Estudiantes.update(req.body, {where: req.params})
                .then(result => res.sendStatus(204))
                .catch(error => {
                    res.status(412).json({msg: error.message});
            });
        })
        .delete((req, res) => {
            Estudiantes.destroy({where: req.params})
                .then(result => res.sendStatus(204))
                .catch(error => {
                    res.status(412).json({msg: error.message});
                });
        });
};