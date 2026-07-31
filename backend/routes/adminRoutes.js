const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const isSuperAdmin = require("../middleware/isSuperAdmin");
const adminController = require("../controllers/adminController");

// ================= CREATE COACH =================

router.post(
  "/create-coach",
  auth,
  isSuperAdmin,
  adminController.createCoach
);

// ================= DASHBOARD =================

router.get(
  "/dashboard",
  auth,
  isSuperAdmin,
  adminController.dashboard
);

// ================= COACHES =================

// Get all coaches
router.get(
  "/coaches",
  auth,
  isSuperAdmin,
  adminController.getCoaches
);

// Edit coach
router.put(
  "/coach/:id",
  auth,
  isSuperAdmin,
  adminController.updateCoach
);

// Activate coach
router.put(
  "/coach/:id/activate",
  auth,
  isSuperAdmin,
  adminController.activateCoach
);

// Delete coach
router.delete(
  "/coach/:id",
  auth,
  isSuperAdmin,
  adminController.deleteCoach
);

// ================= CLIENTS =================

// Get all clients
router.get(
  "/clients",
  auth,
  isSuperAdmin,
  adminController.getClients
);

// Edit client
router.put(
  "/client/:id",
  auth,
  isSuperAdmin,
  adminController.updateClient
);

// Delete client
router.delete(
  "/client/:id",
  auth,
  isSuperAdmin,
  adminController.deleteClient
);

// ================= LEADS / CUSTOMERS =================

// Get all leads
router.get(
  "/leads",
  auth,
  isSuperAdmin,
  adminController.getLeads
);

// Delete lead
router.delete(
  "/lead/:id",
  auth,
  isSuperAdmin,
  adminController.deleteLead
);

// ================= CAREER APPLICATIONS =================

router.get(
  "/applications",
  auth,
  isSuperAdmin,
  adminController.getApplications
);

module.exports = router;