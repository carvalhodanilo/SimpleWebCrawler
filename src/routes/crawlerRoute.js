const express = require('express');
const router = express.Router();
const crawlerController = require('../controllers/CrawlerController')

router.post('/', crawlerController.getProducts);

module.exports = router;