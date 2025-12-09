const express = require('express');
const { Sample, Create, update, Alldata,  deletestu, Myprofile, stulogin, adminlogin, } = require('../Controller/Logic');
const { auth, isAdmin } = require('../Middleware/auth');
const router = express.Router();
router.route('/add_student').post(Create)
router.route('/update_Student').put(update)
router.route('/All_Student').get(isAdmin, auth,Alldata)
router.route('/Delete_Student').delete(deletestu)
router.route('/my-profile').get(auth, Myprofile)
router.route('/slogin').post(stulogin)
router.route('/adminlogin').post(adminlogin)
module.exports = router;