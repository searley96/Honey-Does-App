
const express = require('express');
const constants = require('../constants/constants.json');
const calculateLowEstimate = require('../modules/lowEstimate');
const calculateHighEstimate = require('../modules/highEstimate');

const pool = require("../modules/pool");

const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");
const encryptLib = require("../modules/encryption");
const userStrategy = require("../strategies/user.strategy");
const router = express.Router();

// ********** Job ID Generator **********
router.get("/jobid", (req, res) => {
  // jobID generator

  // this is a function to generate a random 6 character string of numbers to the pass to the server
  // along with new request information
  function jobIDGenerator(min, max) {
    let numberString = "";
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
      console.log("duplicate found, creating new number");
      checkRandomNumberDupes(jobIDGenerator(0, 9), number2, array1, array2);
    } else {
      if (!array1.includes(number1) && !array2.includes(number1)) {
        array2.push(number1);
      }
    }
  };
  // pulls jobIDs from the database
  const queryJobID = `SELECT "job_id" FROM "job"`;
  pool
    .query(queryJobID)
    .then((result) => {
      // console.log(result.rows);
      const jobIdArray = [];
      const approvedJobIdArray = [];
      const jobId = jobIDGenerator(0, 9);
      if (result.rows.length === 0) {
        res.send(jobId);
      } else {
        result.rows.forEach((id) => {
          jobIdArray.push(id.job_id);
        });
        // console.log(jobIdArray);
        jobIdArray.forEach((id) => {
          checkRandomNumberDupes(jobId, id, jobIdArray, approvedJobIdArray);
        });
        // console.log(approvedJobIdArray);
        const approvedJobID = approvedJobIdArray[0];
        // console.log(approvedJobID);
        res.send(approvedJobID);
      }
    })
    .catch(() => {
      console.log("ERROR getting Job ID list");
    });
});
// END ********** Job ID Generator **********

// CLIENT VIEW
// GET JOB HISTORY
router.get("/client/:id", rejectUnauthenticated, (req, res) => {
  console.log("inside client job history");
  const queryText = `
          SELECT job_id, client.first_name as client_first_name, client.last_name as client_last_name,
	    cleaner.first_name as cleaner_first_name, cleaner.last_name as cleaner_last_name,
	    manager.first_name as manager_first_name, manager.last_name as manager_last_name,
        job_status,
	    feedback, 
	    date,
	    start_time,
	    end_time
    FROM "job"
    JOIN "user" AS client ON client.id = "job".client_id
    JOIN "user" AS cleaner ON cleaner.id = "job".cleaner_id
    JOIN "user" AS manager ON manager.id = "job".manager_id
    WHERE "client_id" = $1;
    `;
  pool
    .query(queryText, [req.params.id])
    .then((result) => {
      console.log("checking res.send", result.rows);
      res.send(result.rows);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

// CLEANER VIEW
// GET  JOB HISTORY
router.get("/cleaner/:id", rejectUnauthenticated, (req, res) => {
  console.log("inside fulljobhistory", req.params.id);
  const queryText = `
    SELECT job_id, client.first_name as client_first_name, client.last_name as client_last_name,
	    cleaner.first_name as cleaner_first_name, cleaner.last_name as cleaner_last_name,
	    manager.first_name as manager_first_name, manager.last_name as manager_last_name,
        job_status,
	    feedback, 
	    date,
	    start_time,
	    end_time
    FROM "job"
    JOIN "user" AS client ON client.id = "job".client_id
    JOIN "user" AS cleaner ON cleaner.id = "job".cleaner_id
    JOIN "user" AS manager ON manager.id = "job".manager_id
    WHERE "cleaner_id" = $1;
    `;
  pool
    .query(queryText, [req.params.id])
    .then((result) => {
      console.log("result.row ", result.rows);
      res.send(result.rows);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

// ADMIN
// GET ALL JOBS
router.get("/allJobs", rejectUnauthenticated, (req, res) => {
  const queryText = `
    SELECT job_id, client.first_name as client_first_name, client.last_name as client_last_name,
	    cleaner.first_name as cleaner_first_name, cleaner.last_name as cleaner_last_name,
	    manager.first_name as manager_first_name, manager.last_name as manager_last_name,
        client.id as client_id,
	    cleaner.id as cleaner_id,
	    manager.id as manager_id,
        job_status,
	    feedback, 
	    date,
	    start_time,
	    end_time
    FROM "job"
    JOIN "user" AS client ON client.id = "job".client_id
    JOIN "user" AS cleaner ON cleaner.id = "job".cleaner_id
    JOIN "user" AS manager ON manager.id = "job".manager_id;
    `;
  pool
    .query(queryText)
    .then((result) => {
      console.log("result.rows:", result.rows);
      res.send(result.rows);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

// GET active job
router.get('/:jobId', rejectUnauthenticated, (req, res) => {
    const jobId = req.params.jobId;
    const queryText = `
        SELECT * FROM job
        where job_id = $1;
    `;

    pool.query(queryText, [jobId])
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
    
    // console.log(jobId);
    if(req.user.id){
        const userId = req.user.id;
        const queryText = `
        INSERT INTO "job" (job_id, client_id, job_status)
        VALUES ($1, $2, 'unsubmitted')
    `
        pool.query(queryText, [jobId, userId])
        .then(result => {
            res.sendStatus(201);
        })
        .catch(err => {
            console.log(err);
            res.sendStatus(500);
        })
    }
    else{
        const queryText = `
        INSERT INTO "job" (job_id, client_id, job_status)
        VALUES ($1, 0, 'unsubmitted')
    `
        pool.query(queryText, [jobId])
        .then(result => {
            res.sendStatus(201);
        })
        .catch(err => {
            console.log(err);
            res.sendStatus(500);
        })
    }


  pool
    .query(queryText, [jobId, userId])
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

// calculate low and high ends of the job estimate

router.put('/estimate', rejectUnauthenticated, (req, res) => {
    console.log('HOURLY_RATE is:', constants.HOURLY_RATE);
    const formList = req.body.formList;
    formList.push(req.body.wipeDust);

    const queryText = `
        UPDATE job 
        SET low_estimate = $1, high_estimate = $2
        WHERE job_id = $3;
    `


    console.log('formList in /estimate:', formList);
    const lowEstimate = Math.round(calculateLowEstimate(constants, formList));
    const highEstimate = Math.round(calculateHighEstimate(constants, formList));

    console.log('low estimate is:', lowEstimate);
    console.log('high estimate is:', highEstimate);

    pool.query(queryText, [lowEstimate, highEstimate, req.body.jobId])
        .then(result => {
            res.sendStatus(201);
        }).catch(err => {
            console.log(err);
            res.sendStatus(500);
        })

    // res.sendStatus(200);

    
})


router.post('/guestEstimate', (req, res) => {
    console.log('HOURLY_RATE is:', constants.HOURLY_RATE);
    const formList = req.body.formList;
    formList.push(req.body.wipeDust);

    console.log('formList in /guestEstimate:', formList);
    const lowEstimate = calculateLowEstimate(constants, formList);
    const highEstimate = calculateHighEstimate(constants, formList);

    console.log('low estimate is:', lowEstimate);
    console.log('high estimate is:', highEstimate);
    res.send({lowEstimate, highEstimate});
})

// ADMIN
// Update job details
router.put('/adminUpdateJob', rejectUnauthenticated, (req, res) => {
    console.log('adminUpdateJob req.body:', req.body);

    const queryText = `
        UPDATE "job" SET "cleaner_id" = $1, 
        "job_status" = $2, 
        "date" = $3, 
        "start_time" = $4, 
        "end_time" = $5
        WHERE job_id = $6
    `
    console.log('Query:', queryText, [req.body.cleaner_id, req.body.job_status, req.body.date, req.body.start_time, req.body.end_time, req.body.job_id]);

    pool.query(queryText, [
        req.body.cleaner_id, 
        req.body.job_status, 
        req.body.date, 
        req.body.start_time, 
        req.body.end_time, 
        req.body.job_id
    ])
    .then(result => {
        res.sendStatus(200);
    }).catch(err => {
        console.log(err);
        res.sendStatus(500);
    })
})

// ADMIN
// GET UPDATED JOB DETAILS
router.get('/updatedJobDetails/:job_id', rejectUnauthenticated, (req, res) => {
    console.log('/updatedJobDetails job_id:', req.params.job_id);
    const queryText = `
    SELECT job_id, client.first_name as client_first_name, client.last_name as client_last_name,
    cleaner.first_name as cleaner_first_name, cleaner.last_name as cleaner_last_name,
    manager.first_name as manager_first_name, manager.last_name as manager_last_name,
    client.id as client_id,
    cleaner.id as cleaner_id,
    manager.id as manager_id,
    job_status,
    feedback, 
    date,
    start_time,
    end_time
    FROM "job"
    JOIN "user" AS client ON client.id = "job".client_id
    JOIN "user" AS cleaner ON cleaner.id = "job".cleaner_id
    JOIN "user" AS manager ON manager.id = "job".manager_id
    WHERE job_id = $1;
    `
    pool.query(queryText, [req.params.job_id])
    .then(result => {
        res.send(result.rows);
    }).catch(err => {
        console.log('Error getting updated Job Details:', err);
        res.sendStatus(500);
    })
})

// ADMIN
// GET SEARCHED JOBS
router.get(`/search/:searchTerm`, (req, res) => {
    console.log('/search Search term:', req.params.searchTerm);
    const queryText = `
    SELECT job_id, client.first_name as client_first_name, client.last_name as client_last_name,
	cleaner.first_name as cleaner_first_name, cleaner.last_name as cleaner_last_name,
	manager.first_name as manager_first_name, manager.last_name as manager_last_name,
	client.id as client_id,
	cleaner.id as cleaner_id,
	manager.id as manager_id,
	job_status,
	feedback, 
	date,
	start_time,
	end_time
    FROM "job"
    JOIN "user" AS client ON client.id = "job".client_id
    JOIN "user" AS cleaner ON cleaner.id = "job".cleaner_id
    JOIN "user" AS manager ON manager.id = "job".manager_id
    WHERE client.first_name ILIKE '%' || $1 || '%' OR 
    client.last_name ILIKE '%' || $1 || '%' OR 
    job_status ILIKE '%' || $1 || '%' OR 
    job_id::text ILIKE '%' || $1 || '%';
    `;
    // ::text is called a type cast, and it converts the "job_id" column from its original integer type to a text (string) type.
    // Once we have the "job_id" column converted to text, we can compare it to string literals, in this case the searchTerm

    pool.query(queryText, [req.params.searchTerm])
    .then(result => {
        res.send(result.rows);
    }).catch(err => {
        console.log('Error getting searched jobs:', err);
        res.sendStatus(500);
    })
})

module.exports = router;
