const express = require('express');
const { Sample, Create, update, Alldata,  deletestu, Myprofile, stulogin, adminlogin, getsingle, } = require('../Controller/Logic');
const { auth, isAdmin } = require('../Middleware/auth');
const router = express.Router();
router.route('/add_student').post(Create)
router.route('/update_Student/').put(update)
router.route('/All_Student').get(auth,Alldata)
router.route('/Delete_Student').delete(deletestu) 
router.route('/my-profile').get(auth, Myprofile) //completed make ui changes later
router.route('/slogin').post(stulogin) // completed try to improve ui later
router.route('/adminlogin').post(adminlogin) // completed try to improve ui later

router.route('/getoldsty').get(auth,getsingle)
module.exports = router;