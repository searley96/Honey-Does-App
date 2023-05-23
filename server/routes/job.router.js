const express = require('express');
const constants = require('../constants/constants.json');
const calculateLowEstimate = require('../modules/lowEstimate');

const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();
// ********** Job ID Generator **********
router.get('/jobid', (req, res) => {
    // jobID generator

    // this is a function to generate a random 6 character string of numbers to the pass to the server
    // along with new request information
    function jobIDGenerator(min, max) {
        let numberString = '';
        for (let i = 0; i < 6; i++) {
            let randomNumber = Math.floor(Math.random() * (1 + max - min) + min);
            numberString += randomNumber;
        }
        return numberString;
    }
    // this function checks a number against another number
    // the main purpose is to check the randomly generated number against the array of jobIDs pulled
    // from the database, if a duplicate is found, the function runs again, generating a new random
    // number string, checking against the jobIDs pulled from the database again, until a viable jobID is found
    const checkRandomNumberDupes = (number1, number2, array1, array2) => {
        // console.log('inside checkRandomNumberDupes');
        // console.log('this is number1', number1);
        // console.log('this is number2', number2);
        if (number1 === number2) {
            console.log('duplicate found, creating new number');
            checkRandomNumberDupes(jobIDGenerator(0, 9), number2, array1, array2);
        } else {
            if (!array1.includes(number1) && !array2.includes(number1)) {
                array2.push(number1)
            }
        }
    }
    // pulls jobIDs from the database
    const queryJobID = `SELECT "job_id" FROM "job"`
    pool.query(queryJobID)
        .then((result) => {
            // console.log(result.rows);
            const jobIdArray = [];
            const approvedJobIdArray = [];
            const jobId = jobIDGenerator(0, 9);
            if (result.rows.length === 0) {
                res.send(jobId);
            } else {
                result.rows.forEach(id => {
                    jobIdArray.push(id.job_id);
                })
                // console.log(jobIdArray);
                jobIdArray.forEach(id => {
                    checkRandomNumberDupes(jobId, id, jobIdArray, approvedJobIdArray);
                });
                // console.log(approvedJobIdArray);
                const approvedJobID = approvedJobIdArray[0];
                // console.log(approvedJobID);
                res.send(approvedJobID);
            }
        }).catch(() => {
            console.log('ERROR getting Job ID list');
        })
});
// END ********** Job ID Generator **********

// GET ACTIVE JOB
router.get('/', rejectUnauthenticated, (req, res) => {
    const queryText = `
        SELECT * FROM "job"
        WHERE "client_id" = $1 AND "job_status" = 'active';
    `
    pool.query(queryText, [req.user.id])
        .then(result => {
            res.send(result.rows);
        }).catch(err => {
            console.log(err);
            res.sendStatus(500);
        })
})

// POST new job at start of new request
router.post('/', rejectUnauthenticated, (req, res) => {
    const jobId = req.body.jobId;
    const userId = req.user.id;
    const queryText = `
        INSERT INTO "job" (job_id, client_id, job_status)
        VALUES ($1, $2, 'unsubmitted')
    `
    // console.log(jobId);

    pool.query(queryText, [jobId, userId])
        .then(result => {
            res.sendStatus(201);
        })
        .catch(err => {
            console.log(err);
            res.sendStatus(500);
        })

})

// calculate low and high ends of the job estimate
router.post('/estimate', rejectUnauthenticated, (req, res) => {
    console.log('HOURLY_RATE is:', constants.HOURLY_RATE);
    const formList = req.body.formList;
    formList.push(req.body.wipeDustForm.wipeDust);



    console.log('formList in /estimate:', formList);
    const lowEstimate = calculateLowEstimate(constants, formList);

    res.sendStatus(200);

    
})

module.exports = router;