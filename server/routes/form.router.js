const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');
const router = express.Router();

// KITCHEN GET
router.get('/kitchen/', rejectUnauthenticated, (req, res) => {

})

// KITCHEN POST
router.post('/kitchen/', rejectUnauthenticated, (req, res) => {
    
})

// BATHROOM GET
router.get('/bathroom/', rejectUnauthenticated, (req, res) => {
    
})

// BATHROOM POST
router.post('/bathroom/', rejectUnauthenticated, (req, res) => {
    
})

// OTHER ROOM GET
router.get('/other/', rejectUnauthenticated, (req, res) => {
    
})

// OTHER ROOM POST
router.post('/other/', rejectUnauthenticated, (req, res) => {
    
})

// WIPE / DUST GET
router.get('/wipe-dust/', rejectUnauthenticated, (req, res) => {
    
})

// WIPE / DUST POST
router.post('/wipe-dust/', rejectUnauthenticated, (req, res) => {
    
})

export default router;