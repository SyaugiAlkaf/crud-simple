// routes/index.js

// Import required modules
const express = require('express');
const router = express.Router();
const db = require('../config');

// Home route
router.get('/', (req, res) => {
    db.query('SELECT * FROM tbl_siswa', (err, result) => {
        if (err) {
            req.flash('error_msg', 'Failed to fetch data');
            res.redirect('/');
        } else {
            res.render('index', { data: result });
        }
    });
});

// Export router
module.exports = router;
