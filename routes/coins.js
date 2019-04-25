var express = require('express');
var router = express.Router();
var coinC= require('../controller/coinController');

/* GET users listing. */
router.get('/', coinC.getAll);

router.post('/', coinC.registrar);


router.get('/name/:name', coinC.buscarporName);


router.get('/year/:year', coinC.buscarporYear);



module.exports = router;