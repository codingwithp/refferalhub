const express = require("express");

const router = express.Router();

const {
  getMyReferrals,
} = require("../controllers/clientController");

const auth = require("../middleware/auth");

router.get(
  "/referrals",
  auth,
  getMyReferrals
);
const {
  getRewardCount,
} = require("../controllers/clientController");

router.get(
  "/reward-count",
  auth,
  getRewardCount
);

module.exports = router;