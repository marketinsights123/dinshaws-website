const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('about_us', { isLogin: true });
});

module.exports = router;
