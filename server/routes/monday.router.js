const express = require('express');
const encryptLib = require('../modules/encryption');
const userStrategy = require('../strategies/sql.localstrategy');
const pool = require('../modules/pool.js');
const router = express.Router();

router.post('/monday', (req, res, next) => {
let day = req.body.day
let food = req.body.type
let meal = req.body.meal
console.log("req.body", req.body);

    pool.query('INSERT INTO monday (food, meal) VALUES ($1, $2) ',
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

router.get('/monday', (req, res) => {
    // 
    pool
        .connect(function (err, client, done) {
            let queryString = "SELECT * FROM monday;";
            if (err) {
                console.log("Error connecting: ", err);
                res.sendStatus(500);
            }
            client.query(queryString, (err, result) => {
                client.end();
                if (err) {
                    console.log("Error querying data in /monday GET route: ", err);
                    res.sendStatus(500);
                } else {
                    res
                        .send(result)
                        .status(200);
                }
            });
        });
}); // end /


module.exports = router;
