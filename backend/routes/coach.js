const express = require("express");
const router = express.Router();

const {
  getPipeline,
  updateStatus,
} = require("../controllers/coachController");

router.get("/pipeline", getPipeline);

router.put(
  "/referrals/:id",
  updateStatus
);

module.exports = router;