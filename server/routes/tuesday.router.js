const express = require('express');
const encryptLib = require('../modules/encryption');
const userStrategy = require('../strategies/sql.localstrategy');
const pool = require('../modules/pool.js');
const router = express.Router();

router.post('/tuesday', (req, res, next) => {
    let day = req.body.day
    let food = req.body.type
    let meal = req.body.meal
    console.log("req.body", req.body);

    pool.query('INSERT INTO tuesday (food, meal) VALUES ($1, $2) ',
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
//post for monday lunch it reuses the local variable saveMonday{} but changes the property to lfood
// router.post('/l', (req, res, next) => {
//     const lfood = req.body.lfood;


//     var saveMonday = {
//         lfood: req.body.lfood

//     };
//     console.log('new lfoodmonday:', saveMonday);
//     pool.query('INSERT INTO monday (lfood) VALUES ($1)',
//         [saveMonday.lfood], (err, result) => {
//             if (err) {
//                 console.log("Error inserting data: ", err);
//                 res.sendStatus(500);
//             } else {
//                 res.sendStatus(201);
//             }
//         });
// });
// //post for monday dinner

// router.post('/d', (req, res, next) => {
//     const dfood = req.body.dfood;


//     var saveMonday = {
//         dfood: req.body.dfood

//     };
//     console.log('new dfoodmonday:', saveMonday);
//     pool.query('INSERT INTO monday (dfood) VALUES ($1)',
//         [saveMonday.dfood], (err, result) => {
//             if (err) {
//                 console.log("Error inserting data: ", err);
//                 res.sendStatus(500);
//             } else {
//                 res.sendStatus(201);
//             }
//         });
// });

module.exports = router;