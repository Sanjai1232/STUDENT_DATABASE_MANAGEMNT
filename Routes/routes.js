const express = require('express');
const { Sample, Create, update, Alldata,  deletestu, Myprofile} = require('../Controller/Logic');
const router = express.Router();
router.route('/sample').get(Sample);
router.route('/add_student').post(Create)
router.route('/update_Student').put(update)
router.route('/All_Student').get(Alldata)
router.route('/Delete_Student').delete(deletestu)
router.route('/my-profile').get(Myprofile)
module.exports = router;