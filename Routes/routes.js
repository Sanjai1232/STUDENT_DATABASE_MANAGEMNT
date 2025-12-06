const express = require('express');
const { Sample, Create, update, Alldata, lklk, deletestu} = require('../Controller/Logic');
const router = express.Router();
router.route('/sample').get(Sample);
router.route('/add_student').post(Create)
router.route('/update_Student').put(update)
router.route('/All_Student').get(Alldata)
router.route('/Delete_Student').delete(deletestu)
module.exports = router;