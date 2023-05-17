const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


    // jobID generator
        // this is a function to generate a random 6 character string of numbers to the pass to the server
            // along with new request information
    function jobIDGenerator (min, max) {
        let numberString = '';
        for(let i = 0; i < 6; i++) {
            let randomNumber = Math.floor(Math.random() * (1 + max - min) + min);
            numberString += randomNumber;
        }
        return numberString;
    }
    const checkRandomNumberDupes = (number1, number2, array) => {
        if(number1 === number2) {
            checkRandomNumberDupes(jobIDGenerator(0, 9), number2);
        } else {
            if(!array.includes(number1)) {
                array.push(number1)
            }
        }
    }

    const queryJobID = `SELECT "job_id" FROM "job"`
    pool.query(queryJobID)
    .then((result) => {
        console.log(result.rows);
        const jobIdArray = [];
        const jobId = jobIDGenerator(0, 9);
        result.rows.forEach(id => {
            checkRandomNumberDupes(jobId, id.job_id, jobIdArray);
        });
        const approvedJobID = jobIdArray[0];
        console.log(approvedJobID);
    }).catch(() => {
        console.log('ERROR getting Job ID list');
    })
    


    

module.exports = router;