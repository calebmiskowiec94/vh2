const express = require('express');
const encryptLib = require('../modules/encryption');
const userStrategy = require('../strategies/sql.localstrategy');
const pool = require('../modules/pool.js');
const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', (req, res) => {
  // check if logged in
  if (req.isAuthenticated()) {
    // send back user object from database
    res.send(req.user);
  } else {
    // failure best handled on the server. do redirect here.
    res.sendStatus(403);
  }
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register', (req, res, next) => {
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);

  var saveUser = {
    username: req.body.username,
    password: encryptLib.encryptPassword(req.body.password)
  };
  console.log('new user:', saveUser);
  pool.query('INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id',
    [saveUser.username, saveUser.password], (err, result) => {
      if (err) {
        console.log("Error inserting data: ", err);
        res.sendStatus(500);
      } else {
        res.sendStatus(201);
      }
    });
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});
// clear all server session information about this user
router.get('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});






//monday
// router.post('/', (req, res, next) => {
//   const monday_id = req.body.monday_id;
//   const bFood = req.body.bFood;
  

//   var saveFood = {
//     monday_id: req.body.monday_id,
//     bFood: req.body.bFood, 
//   }
//   pool.query('INSERT INTO monday (monday_id, bfood) VALUES ($1, $2)',
//     [saveFood.monday_id,saveFood.bfood], (err, result) => {
//       if (err) {
//         console.log("Error inserting data: ", err);
//         res.sendStatus(500);
//       } else {
//         res.sendStatus(201);
//       }
//     });
//   console.log("var save savefood is", saveFood);
//   res.sendStatus(200);

// });


module.exports = router;
