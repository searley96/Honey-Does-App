const express = require('express');
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');
const router = express.Router();

router.get('/:id', rejectUnauthenticated, (req, res) => {
    const jobId = req.params.id;

    const queryText =
        `SELECT message_log.id, message_log.job_id, "timestamp", image_url, "text", sender_id, job.client_id, job.manager_id, job.cleaner_id, job.job_status
        FROM message_log
        JOIN job ON job.job_id = message_log.job_id
        WHERE message_log.job_id = $1
        ORDER BY TIMESTAMP ASC;`

    pool.query(queryText, [jobId])
        .then(result => {
            console.log('result.rows', result.rows);
            // authorizes user for chat messages
            if (req.user.id === result.rows[0].client_id ||
                req.user.id === result.rows[0].cleaner_id ||
                req.user.id === result.rows[0].manager_id) {
                res.send(result.rows);
            }
            else {
                res.sendStatus(403);
            }
        }).catch(err => {
            console.log(err);
            res.sendStatus(500);
        })
})

router.post('/', rejectUnauthenticated, (req, res) => {
    const jobId = req.body.jobId,
        ts = req.body.ts,
        image_url = req.body.image_url,
        messageText = req.body.messageText,
        sender_id = req.body.sender_id
        console.log(req.body);
    const queryText = `
        INSERT INTO "message_log" (job_id, "timestamp", image_url, "text", sender_id)
        VALUES ($1, $2, $3, $4, $5);    
    `

    pool.query(queryText, [jobId, ts, image_url, messageText, sender_id])
        .then(result => {
            res.send(201);
        }).catch(err => {
            console.log(err);
            res.send(500);
        })
})



module.exports = router;