const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const coachController = require("../controllers/coachController");

router.get(
  "/clients",
  auth,
  coachController.getMyClients
);

router.get(
  "/pipeline",
  auth,
  coachController.getPipeline
);

router.put(
  "/referrals/:id",
  auth,
  coachController.updateStatus
);

module.exports = router;