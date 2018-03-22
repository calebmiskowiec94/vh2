const express = require('express');
const encryptLib = require('../modules/encryption');
const userStrategy = require('../strategies/sql.localstrategy');
const pool = require('../modules/pool.js');
const router = express.Router();
//post for monday breakfast
router.post('/b', (req, res, next) => {
    const bfood = req.body.bfood;
    

    var saveMonday = {
        bfood: req.body.bfood
        
    };
    console.log('new bfoodmonday:', saveMonday);
    pool.query('INSERT INTO monday (bfood) VALUES ($1)',
        [saveMonday.bfood], (err, result) => {
            if (err) {
                console.log("Error inserting data: ", err);
                res.sendStatus(500);
            } else {
                res.sendStatus(201);
            }
        });
});
//post for monday lunch it reuses the local variable saveMonday{} but changes the property to lfood
router.post('/l', (req, res, next) => {
    const lfood = req.body.lfood;


    var saveMonday = {
        lfood: req.body.lfood

    };
    console.log('new lfoodmonday:', saveMonday);
    pool.query('INSERT INTO monday (lfood) VALUES ($1)',
        [saveMonday.lfood], (err, result) => {
            if (err) {
                console.log("Error inserting data: ", err);
                res.sendStatus(500);
            } else {
                res.sendStatus(201);
            }
        });
});
//post for monday dinner

router.post('/d', (req, res, next) => {
    const dfood = req.body.dfood;


    var saveMonday = {
        dfood: req.body.dfood

    };
    console.log('new dfoodmonday:', saveMonday);
    pool.query('INSERT INTO monday (dfood) VALUES ($1)',
        [saveMonday.dfood], (err, result) => {
            if (err) {
                console.log("Error inserting data: ", err);
                res.sendStatus(500);
            } else {
                res.sendStatus(201);
            }
        });
});

module.exports = router;
