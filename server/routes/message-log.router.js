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
            console.log(req.user.id, result.rows[0].cleaner_id)
            if(req.user.id === result.rows[0].client_id || 
                req.user.id === result.rows[0].cleaner_id || 
                req.user.id === result.rows[0].manager_id){
            res.send(result.rows);
            }
            else{
                res.sendStatus(403);
            }
        }).catch(err => {
            console.log(err);
            res.sendStatus(500);
        })
})



module.exports = router;