const express = require('express');
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');
const router = express.Router();

// GET FORM LIST
router.get('/form-list', rejectUnauthenticated, (req, res) => {
    const jobId = req.user.form_job_id;
    const querybathrooms = `
        SELECT * FROM user_bathroom
        WHERE job_id = $1
        ORDER BY "order" ASC;
    `;
    const querykitchens = `
        SELECT * FROM user_kitchen
        WHERE job_id = $1
        ORDER BY "order" ASC;
    `;
    const queryOtherRooms = `
        SELECT * FROM user_other_room
        WHERE job_id = $1
        ORDER BY "order" ASC;
    `;
    const queryWipeDust = `
        SELECT * FROM user_wipe_dust
        WHERE job_id = $1
        ORDER BY "order" ASC;
    `;
    // **QUERY BATHROOMS**
    pool.query(querybathrooms, [jobId])
        .then(bathroomResults => {

            // **QUERY KITCHENS**
            pool.query(querykitchens, [jobId])
                .then(kitchenResults => {

                    // **QUERY OTHER ROOMS**
                    pool.query(queryOtherRooms, [jobId])
                        .then(otherRoomResults => {

                            // **QUERY KITCHENS**
                            pool.query(queryWipeDust, [jobId])
                                .then(wipeDustResults => {
                                    console.log('bathroomResults:', bathroomResults.rows);
                                    console.log('kitchenResults:', kitchenResults.rows);
                                    console.log('otherRoomResults:', otherRoomResults.rows);
                                    console.log('wipeDustResults:', wipeDustResults.rows);
                                    // takes the results of every query and spreads them out in order into a new array
                                    // packages the new array as the response and sends it back to the room saga
                                    res.send([...bathroomResults.rows, ...kitchenResults.rows, ...otherRoomResults.rows, ...wipeDustResults.rows])
                                })
                                // catch wipe dust 
                                .catch(err => {
                                    console.log(err);
                                    res.sendStatus(500);
                                })

                            // catch other rooms
                        }).catch(err => {
                            console.log(err);
                            sendStatus(500);
                        })

                    // catch kitchens    
                }).catch(err => {
                    console.log(err);
                    res.sendStatus(500);
                })

            // catch bathrooms
        }).catch(err => {
            console.log(err);
            res.sendStatus(500);
        })
})

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
    // console.log(req.body);
    const queryText = `
        INSERT INTO user_kitchen( 
            job_id,
            "order",
            form_type,
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
            $21, $22, $23, $24, $25, $26, $27, $28)
        ;
        `;
    pool.query(queryText,
        [
            req.body.jobId,
            req.body.order,
            'kitchen',
            req.body.kitchen.wipe_cabinets,
            req.body.kitchen.cabinet_spot_full_clean,
            req.body.kitchen.cabinet_orange_glo,

            req.body.kitchen.wipe_appliances,
            req.body.kitchen.wipe_fridge,
            req.body.kitchen.fridge_stainless_steel,
            req.body.kitchen.wipe_dishwasher,
            req.body.kitchen.clean_hood_vent,

            req.body.kitchen.wipe_deep_freezer,
            req.body.kitchen.clean_microwave,
            req.body.kitchen.clean_stove_top,
            req.body.kitchen.type_of_stove,
            req.body.kitchen.clean_hood_vent,

            req.body.kitchen.hood_vent_special_instructions,
            req.body.kitchen.back_splash,
            req.body.kitchen.clean_stove_front,
            req.body.kitchen.stove_stainless_steel,
            req.body.kitchen.wipe_counters_sink,

            req.body.kitchen.granite_counter_tops,
            req.body.kitchen.sweep_mop_floor,
            req.body.kitchen.shake_rugs,
            req.body.kitchen.hardwood_floors,
            req.body.kitchen.specialty_flooring,

            req.body.kitchen.specialty_flooring_instructions,
            req.body.kitchen.mop_location
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

    // console.log(req.body);
    const queryText = `
        INSERT INTO user_bathroom( 
            job_id,
            "order",
            form_type,
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
            $21, $22, $23, $24
            );
        `;
    pool.query(queryText,
        [
            req.body.jobId,
            req.body.order,
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
    // console.log(req.body);
    const queryText = `
    INSERT INTO user_other_room( 
        job_id,
        "order",
        form_type,
        floor_type,
        wipe_surfaces,
        clean_floor,
        sq_ft
        
        )
    VALUES(
        $1, $2, $3, $4, $5, $6, $7)
    ;
    `
    pool.query(queryText,
        [
            req.body.jobId,
            req.body.order,
            req.body.wipeDust.form_type,
            req.body.wipeDust.floor_type,
            req.body.wipeDust.wipe_surfaces,
            req.body.wipeDust.clean_floor,
            req.body.wipeDust.sq_ft
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
    // console.log(req.body);
    const queryText = `
    INSERT INTO "user_wipe_dust"( 
       job_id,
       "order",
       form_type,
       wipe_clean_glass,
       glass_door,
       glass_door_number,

       inside_glass_door,
       outside_glass_door,
       glass_door_location,
       other_mirrors,
       other_mirrors_number,

       other_mirrors_location,
       dust,
       ceiling_lines_wall_lines_baseboards,
       ceiling_fixtures,
       swiffer_feather,

       window_blinds,
       window_ledges,
       window_sills,
       picture_frames_wall_decor,
       tops_decor_items,

       pick_up_get_under,
       electronics,
       dust_other,
       dust_other_instructions,
       dust_bed_living_furniture,

       bed_living_furniture_duster,
       orange_glo_applicable
        )
    VALUES(
        $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, 
            $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, 
            $21, $22, $23, $24, $25, $26, $27, $28
            );
    `
    pool.query(queryText,
        [
            req.body.jobId,
            req.body.order,
            'wipe_dust',
            req.body.wipeDust.wipe_clean_glass,
            req.body.wipeDust.glass_door,
            req.body.wipeDust.glass_door_number,

            req.body.wipeDust.inside_glass_door,
            req.body.wipeDust.outside_glass_door,
            req.body.wipeDust.glass_door_location,
            req.body.wipeDust.other_mirrors,
            req.body.wipeDust.other_mirrors_number,

            req.body.wipeDust.other_mirrors_location,
            req.body.wipeDust.dust,
            req.body.wipeDust.ceiling_lines_wall_lines_baseboards,
            req.body.wipeDust.ceiling_fixtures,
            req.body.wipeDust.swiffer_feather,

            req.body.wipeDust.window_blinds,
            req.body.wipeDust.window_ledges,
            req.body.wipeDust.window_sills,
            req.body.wipeDust.picture_frames_wall_decor,
            req.body.wipeDust.tops_decor_items,

            req.body.wipeDust.pick_up_get_under,
            req.body.wipeDust.electronics,
            req.body.wipeDust.dust_other,
            req.body.wipeDust.dust_other_instructions,
            req.body.wipeDust.dust_bed_living_furniture,

            req.body.wipeDust.bed_living_furniture_duster,
            req.body.wipeDust.orange_glo_applicable
        ]).then(response => {
            res.sendStatus(201);
        }).catch(err => {
            console.log(err);
            res.sendStatus(500);
        })
})

module.exports = router;