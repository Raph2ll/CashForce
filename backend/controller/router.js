const express = require('express');

const router = express.Router({ mergeParams: true });

router.get('/', require('./orders'));

module.exports = router;