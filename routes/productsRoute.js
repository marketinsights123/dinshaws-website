const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('products',{isLogin: true });
});
router.get('/milk', (req, res) => {
    res.render('milk',{isLogin: true });
});

router.get('/milk-product', (req, res) => {
    res.render('milk_products',{isLogin: true });
});

router.get('/icecream', (req, res) => {
    res.render('ice_cream',{isLogin: true });
});
router.get('/bakery', (req, res) => {
    res.render('bakery',{isLogin: true });
});
router.get('/namkeen', (req, res) => {
    res.render('namkeen',{isLogin: true });
});

module.exports = router;
