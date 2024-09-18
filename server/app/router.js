const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions

const announceActions = require("./controllers/AnnounceActions");
const companyActions = require("./controllers/CompanyActions");

const candidateActions = require("./controllers/CandidateActions");
const upload = require("./services/upload");
const { verifPassword, hashPassword } = require("./services/auth");

const contractActions = require("./controllers/ContractActions");

// Route to get a list of items
router.get("/announce", announceActions.browse);
router.get("/company", companyActions.browse);
router.get("/candidate", candidateActions.browse);

router.get("/contract", contractActions.browse);
// Route to get a specific item by ID
router.get("/announce/:id", announceActions.read);
router.get("/company/:id", companyActions.read);
router.get("/candidate/:id", candidateActions.read);

// Route to add a new item
router.post("/announce", announceActions.add);

router.post(
  "/company",
  upload.uploadCompanyFiles,
  verifPassword,
  hashPassword,
  companyActions.add
);
router.post("/candidate", upload.uploadCandidateFile, candidateActions.add);

// Route to delete an item
router.delete("/announce/:id", announceActions.destroy);
router.delete("/company/:id", companyActions.destroy);
router.delete("/candidate/:id", candidateActions.destroy);

// Route to edit an item
router.put("/announce/:id", announceActions.edit);
router.put("/company/:id", upload.uploadCompanyFiles, companyActions.edit);
router.put("/candidate/:id", upload.uploadCandidateFile, candidateActions.edit);
/* ************************************************************************* */

module.exports = router;
