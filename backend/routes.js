const express = require('express');
const router = express.Router();

// Placeholder API routes
router.post('/register', (req, res) => {
    res.send('Register API');
});

router.post('/login', (req, res) => {
    res.send('Login API');
});

router.post('/update-location', (req, res) => {
    res.send('Update Location API');
});

router.get('/find-driver', (req, res) => {
    res.send('Find Driver API');
});

module.exports = router;
