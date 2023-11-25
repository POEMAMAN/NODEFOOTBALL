const express = require("express");
const router = express.Router();
const ligasSchema = require('/Users/luisc/BOOTCAMP/NODEFOOTBALL/models/ligas.model')

router.route('/ligas').get((req, res) => {
    ligasSchema.find((error, response) => {
        if (error) {
            return next(error)
        } else {
            res.status(200).json(response)
        }
    })
})

router.post('/ligas', (req, res, next) => {
    const liga = new ligasSchema({
        ligaName: req.body.ligaName,
        description: req.body.description,
        firtsMatch: req.body.firtsMatch,
    });
    liga.save().then((response) => {
        res.status(201).json({
            message: "liga successfully created!",
            result: response
        });
    }).catch(error => {
        res.status(500).json({
            error: error
        });
    });
});

module.exports = router;