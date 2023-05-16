const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register', (req, res, next) => {
  const password = encryptLib.encryptPassword(req.body.password),
        first_name = req.body.firstName,
        last_name = req.body.lastName,
        username = req.body.username,
        phone_number = req.body.phoneNumber,
        role = req.body.role,
        address = req.body.address

        console.log(req.body);
  const queryText = `INSERT INTO "user" 
      (password, first_name, last_name, username, 
      phone_number, role, address)
    VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id`;
  pool
    .query(queryText, [password, first_name, last_name, username, phone_number, role, address])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('User registration failed: ', err);
      res.sendStatus(500);
    });
});

// Handles CLIENT USER information update PUT
router.put('/client/update/:id', rejectUnauthenticated, (req, res) => {
  console.log('this is req.body', req.body);
  console.log('this is req.params', req.params.id);
  const queryText = `UPDATE "user" SET "first_name" = $1, "last_name" = $2, "username" = $3, "phone_number" = $4, "address" = $5 WHERE id=$6;`; 
  const queryValues = [req.body.first_name, req.body.last_name, req.body.username, req.body.phone_number, req.body.address, req.params.id];
  pool.query(queryText, queryValues)
  .then((result) => {
    res.sendStatus(200);
  }).catch((error) => {
    console.log('this is the error', error);
    res.sendStatus(500);
  })
})

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

module.exports = router;
