const express = require('express');
const router = express.Router();
const { ensureAuth } = require('../helpers/auth');

router.get('/', (req, res) => {
    res.render('stories/index');
});

router.get('/add', ensureAuth, (req, res) => {
    res.render('stories/add', {
        add: true
    });
})

module.exports = router;