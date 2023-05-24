const express = require('express');
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');
const router = express.Router();


// GET chat log
router.get('/:jobId', rejectUnauthenticated, (req, res) => {
    const jobId = req.params.jobId;
    // console.log(jobId);
    const queryText =
        `SELECT message_log.id, message_log.job_id, "timestamp", image_url, "text", sender_id, job.client_id, job.manager_id, job.cleaner_id, job.job_status
        FROM message_log
        JOIN job ON job.job_id = message_log.job_id
        WHERE message_log.job_id = $1
        ORDER BY TIMESTAMP ASC;`

    pool.query(queryText, [jobId])
        .then(result => {
            
            console.log('result.rows', result.rows);
            console.log('req.user.id', req.user.id);
            // authorizes user for chat messages


            if (result.rows.length > 0) {
                if (req.user.id === result.rows[0].client_id ||
                    req.user.id === result.rows[0].cleaner_id ||
                    req.user.id === result.rows[0].manager_id) {
                     
                        
                        

                    res.send(result.rows);
                } 
                else{
                    res.sendStatus(403);
                }
            }
            else {
                console.log(result.rows.length)
                res.send([]);
            }
        }).catch(err => {
            console.log(err);
            res.sendStatus(500);
        })
})

// POST new message
router.post('/', rejectUnauthenticated, (req, res) => {
    const jobId = req.body.jobId,
        ts = req.body.timeStamp,
        // image_url = req.body.image_url,
        messageText = req.body.text,
        sender_id = req.user.id
        // console.log(req.user.id);
        const queryText = `
        INSERT INTO "message_log" (job_id, "timestamp", "text", sender_id, image_url)
        VALUES ($1, $2, $3, $4, $5);    
        `
        console.log(jobId, ts, messageText, sender_id, queryText);

    pool.query(queryText, [jobId, ts, messageText, sender_id, ''])
        .then(result => {
            res.sendStatus(201);
        }).catch(err => {
            // console.log(err);
            res.sendStatus(500);
        })
})



module.exports = router;