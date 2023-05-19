const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');
const router = express.Router();

// KITCHEN GET
router.get('/kitchen/:job_id', rejectUnauthenticated, (req, res) => {
    const jobId = req.params.jobID;

    

    const queryText = `
        SELECT * FROM user_kitchen
        WHERE job_id = $1;
    `;

    pool.query(queryText, [jobId])
        .then(result => {
            res.send(result.rows);
        }).catch(err => {
            console.log(err);
            res.sendStatus(500);
        })
})

// KITCHEN POST
router.post('/kitchen/', rejectUnauthenticated, (req, res) => {
    console.log(req.body);
    const queryText = `
        INSERT INTO user_kitchen( 
            job_id,
            room_type,
            wipe_cabinets,
            cabinet_spot_full_clean,
            cabinet_orange_glo,

            wipe_appliances,
            wipe_fridge,
            fridge_stainless_steel,
            wipe_dishwasher,
            dishwasher_stainless_steel,

            wipe_deep_freezer,
            clean_microwave,
            clean_stove_top,
            type_of_stove,
            clean_hood_vent,

            hood_vent_special_instructions,
            back_splash,
            clean_stove_front,
            stove_stainless_steel,
            wipe_counters_sink,

            granite_counter_tops,
            sweep_mop_floor,
            shake_rugs,
            hardwood_floors,
            specialty_flooring,

            specialty_flooring_instructions,
            mop_location
            )
        VALUES(
            $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, 
            $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, 
            $21, $22, $23, $24, $25, $26, $27)
        ;
        `;
        pool.query(queryText, 
            [
                // req.body.job_id, 
                123456,
                'kitchen', 
                req.body.wipe_cabinets, 
                req.body.cabinet_spot_full_clean, 
                req.body.cabinet_orange_glo, 

                req.body.wipe_appliances,
                req.body.wipe_fridge,
                req.body.fridge_stainless_steel,
                req.body.wipe_dishwasher,
                req.body.clean_hood_vent,

                req.body.wipe_deep_freezer,
                req.body.clean_microwave,
                req.body.clean_stove_top,
                req.body.type_of_stove,
                req.body.clean_hood_vent,

                req.body.hood_vent_special_instructions,
                req.body.back_splash,
                req.body.clean_stove_front,
                req.body.stove_stainless_steel,
                req.body.wipe_counters_sink,

                req.body.granite_counter_tops,
                req.body.sweep_mop_floor,
                req.body.shake_rugs,
                req.body.hardwood_floors,
                req.body.specialty_flooring,

                req.body.specialty_flooring_instructions,
                req.body.mop_location
            ]).then(response => {
                console.log('kitchen POSTED successfully!');
                res.sendStatus(201);
            }).catch(err => {
                console.log(err);
                res.sendStatus(500);
            })
})

// BATHROOM GET
router.get('/bathroom/:jobid', rejectUnauthenticated, (req, res) => {
    const jobId = req.params.jobid;
    const queryText = `
        SELECT * FROM user_bathroom
        WHERE job_id = $1;
    `;

    pool.query(queryText, [jobId])
        .then(result => {
            res.send(result.rows);
        }).catch(err => {
            console.log(err);
            res.sendStatus(500);
        })
})

// BATHROOM POST
router.post('/bathroom/', rejectUnauthenticated, (req, res) => {
    
    console.log(req.body);
    const queryText = `
        INSERT INTO user_bathroom( 
            job_id,
            room_type,
            bathroom_type,
            regular_type,
            ceramic_porcelain_type,

            walk_in_type,
            specialty_type,
            jacuzzi_type,
            other_type,
            clean_jacuzzi,

            clean_mirror,
            number_mirrors_clean,
            clean_sink_counter,
            granite_counter_tops,
            sink_type,

            clean_front_cabinets,
            cabinet_spot_full_clean,
            cabinet_orange_glo,
            clean_toilet,
            take_out_trash,

            take_out_trash_instructions,
            sweep_mop_floor,
            shake_rugs
            )
        VALUES(
            $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, 
            $11, $12, $13, $14, $15, $16, $17, $18, $19, $20,
            $21, $22, $23
            );
        `;
        pool.query(queryText, 
            [
                req.body.jobId,
                'bathroom', 
                req.body.bathroom.bathroom_type, 
                req.body.bathroom.regular_type,
                req.body.bathroom.ceramic_porcelain_type,

                req.body.bathroom.walk_in_type,
                req.body.bathroom.specialty_type,
                req.body.bathroom.jacuzzi_type,
                req.body.bathroom.other_type,
                req.body.bathroom.clean_jacuzzi, 

                req.body.bathroom.clean_mirror,
                req.body.bathroom.number_mirrors_clean,
                req.body.bathroom.clean_sink_counter,
                req.body.bathroom.granite_counter_tops,
                req.body.bathroom.sink_type,

                req.body.bathroom.clean_front_cabinets,
                req.body.bathroom.cabinet_spot_full_clean,
                req.body.bathroom.cabinet_orange_glo,
                req.body.bathroom.clean_toilet,
                req.body.bathroom.take_out_trash,

                req.body.bathroom.take_out_trash_instructions,
                req.body.bathroom.sweep_mop_floor,
                req.body.bathroom.shake_rugs
            ]).then(response => {
                res.sendStatus(201);
            }).catch(err => {
                console.log(err);
                res.sendStatus(500);
            })
})

// OTHER ROOM GET
router.get('/other/:jobid', rejectUnauthenticated, (req, res) => {
    const jobId = req.params.jobid;
    const queryText = `
        SELECT * FROM user_other_room
        WHERE job_id = $1;
    `;

    pool.query(queryText, [jobId])
        .then(result => {
            res.send(result.rows);
        }).catch(err => {
            console.log(err);
            res.sendStatus(500);
        })
})

// OTHER ROOM POST
router.post('/other/', rejectUnauthenticated, (req, res) => {
    const queryText = `
    INSERT INTO user_other_room( 
        job_id,
        room_type,
        floor_type,
        wipe_surfaces,
        clean_floor,
        sq_ft
        
        )
    VALUES(
        $1, $2, $3, $4, $5, $6)
    ;
    `
    pool.query(queryText, 
        [
            123456, 
            'other', 
            req.body.floor_type, 
            req.body.wipe_surfaces, 
            req.body.clean_floor, 
            req.body.sq_ft
        ]).then(response => {
            res.sendStatus(201);
        }).catch(err => {
            console.log(err);
            res.sendStatus(500);
        })
})

// WIPE / DUST GET
router.get('/wipe-dust/:jobid', rejectUnauthenticated, (req, res) => {
    // mind the table name
    const jobId = req.params.jobid;
    const queryText = `
        SELECT * FROM TABLE_NAME_HERE
        WHERE job_id = $1;
    `;

    pool.query(queryText, [jobId])
        .then(result => {
            res.send(result.rows);
        }).catch(err => {
            console.log(err);
            res.sendStatus(500);
        })
})

// WIPE / DUST POST
router.post('/wipe-dust/', rejectUnauthenticated, (req, res) => {
    // mind the table name
    const queryText = `
    INSERT INTO TABLE_NAME( 
       
        
        )
    VALUES(
        $1, $2, $3, $4, $5, $6);
    `
    pool.query(queryText, 
        [
            // req.body.job_id, 
            // req.body.room_type, 
            // req.body.floor_type, 
            // req.body.wipe_surfaces, 
            // req.body.clean_floor, 
            // req.body.sq_ft
        ]).then(response => {
            res.sendStatus(201);
        }).catch(err => {
            console.log(err);
            res.sendStatus(500);
        })
})

module.exports = router;