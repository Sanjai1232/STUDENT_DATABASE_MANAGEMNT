const express = require('express');
const { Sample, Create, update } = require('../Controller/Logic');
const router = express.Router();
router.route('/sample').get(Sample);
router.route('/add_student').post(Create)
router.route('/update_Student').put(update)
module.exports = router;