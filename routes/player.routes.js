const express = require("express");
const router = express.Router();
const playersSchema = require('/Users/luisc/BOOTCAMP/NODEFOOTBALL/models/players.model')

router.route('/players').get((req, res) => {
    playersSchema.find((error, response) => {
        if (error) {
            return next(error)
        } else {
            res.status(200).json(response)
        }
    })
})

router.post('/players', (req, res, next) => {
    const player = new playersSchema({
        name: req.body.playerName,
        nationality: req.body.nationality,
        playerAge: req.body.playerAge,
        ligaName: req.body.ligaName
    });
    player.save().then((response) => {
        res.status(201).json({
            message: "player successfully created!",
            result: response
        });
    }).catch(error => {
        res.status(500).json({
            error: error
        });
    });
});

module.exports = router;