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
    const checkRandomNumberDupes = (number1, number2, array1, array2) => {
        console.log('inside checkRandomNumberDupes');
        console.log('this is number1', number1);
        console.log('this is number2', number2);
        if(number1 === number2) {
            console.log('duplicate found, creating new number');
            checkRandomNumberDupes(jobIDGenerator(0, 9), number2, array1, array2);
        } else {
            if(!array1.includes(number1) && !array2.includes(number1)) {
                array2.push(number1)
            }
        }
    }
    const queryJobID = `SELECT "job_id" FROM "job"`
    pool.query(queryJobID)
    .then((result) => {
        console.log(result.rows);
        const jobIdArray = [];
        const approvedJobIdArray = [];
        const jobId = jobIDGenerator(0, 9);
        result.rows.forEach(id => {
            jobIdArray.push(id.job_id);
        })
        console.log(jobIdArray);
        jobIdArray.forEach(id => {
            checkRandomNumberDupes(jobId, id, jobIdArray, approvedJobIdArray);
        });
        console.log(approvedJobIdArray);
        const approvedJobID = approvedJobIdArray[0];
        console.log(approvedJobID);
    }).catch(() => {
        console.log('ERROR getting Job ID list');
    })

module.exports = router;