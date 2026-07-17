const express = require("express");

const router = express.Router();

const auth = require("../middleware/auth");

const isSuperAdmin = require("../middleware/isSuperAdmin");

const adminController = require("../controllers/adminController");

router.post(

"/create-coach",

auth,

isSuperAdmin,

adminController.createCoach

);

router.get(

"/dashboard",

auth,

isSuperAdmin,

adminController.dashboard

);

router.get(

"/coaches",

auth,

isSuperAdmin,

adminController.getCoaches

);

router.get(

"/clients",

auth,

isSuperAdmin,

adminController.getClients

);

router.get(

"/leads",

auth,

isSuperAdmin,

adminController.getLeads

);

router.delete(

"/coach/:id",

auth,

isSuperAdmin,

adminController.deleteCoach

);
router.get("/applications", controller.getApplications);

module.exports = router;