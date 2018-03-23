const express = require('express');
const encryptLib = require('../modules/encryption');
const userStrategy = require('../strategies/sql.localstrategy');
const pool = require('../modules/pool.js');
const router = express.Router();

router.post('/sunday', (req, res, next) => {
    let day = req.body.day
    let food = req.body.type
    let meal = req.body.meal
    console.log("req.body", req.body);

    pool.query('INSERT INTO sunday (food, meal) VALUES ($1, $2) ',
        [food, meal], (err, result) => {
            if (err) {
                console.log("Error inserting data: ", err);
                res.sendStatus(500);
            } else {
                // res.sendStatus(201);
                console.log(result);

            }
        });
});


module.exports = router;