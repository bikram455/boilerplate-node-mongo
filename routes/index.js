const { Router } = require('express');
const router = Router();
const controller = require('../controller/placeholder.controller');

router.route('/')
.get(controller.placeholder);

// Add more routes as per need

module.exports = router;