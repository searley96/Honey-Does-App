const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');
const router = express.Router();

router.get('/', rejectUnauthenticated, (req, res) => {
    const jobId = req.body.jobId;
    const queryText = 
        `SELECT * FROM message_log
        WHERE job_id = $1
        ORDER BY TIMESTAMP ASC;`

    pool.query(queryText, [jobId])
        .then(result => {
            res.send(result.rows);
        }).catch(err => {
            console.log(err);
            res.sendStatus(500);
        })
})

module.exports = router;