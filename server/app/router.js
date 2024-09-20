const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions

const announceActions = require("./controllers/AnnounceActions");
const companyActions = require("./controllers/CompanyActions");

const candidateActions = require("./controllers/CandidateActions");
const answerActions = require("./controllers/AnswerActions");
const upload = require("./services/upload");

const candidateAuth = require("./services/candidateAuth");

const companyAuth = require("./services/companyAuth");

const contractActions = require("./controllers/ContractActions");

// Route to get a list of items
router.get("/announce", announceActions.browse);
router.get("/company", companyActions.browse);
router.get("/candidate", candidateAuth.verifyToken, candidateActions.browse);
router.get("/candidate", candidateActions.browse);
router.get("/answer", answerActions.browse);
router.get("/contract", contractActions.browse);
router.get("/logout", candidateActions.disconnect);
router.get("/checkAuth", candidateAuth.verifyToken, candidateActions.isLogged);

// Route to get a specific item by ID
router.get("/announce/:id", announceActions.read);
router.get("/company/:id", companyActions.read);
router.get("/candidate/:id", candidateActions.read);
router.get("/answer/:id", answerActions.read);

// Route to add a new item
router.post("/announce", announceActions.add);
router.post(
  "/candidate",
  candidateAuth.verifyFields,
  candidateAuth.hashPassword,
  candidateActions.add
);
router.post(
  "/login",
  candidateAuth.verifyPassword,
  candidateAuth.createToken,
  candidateActions.login
);
router.post(
  "/company",
  upload.uploadCompanyFiles,
  companyAuth.verifyFields,
  companyAuth.verifPassword,
  companyAuth.hashPassword,
  companyActions.add
);
router.post(
  "/loginCompany",
  companyAuth.verifyPasswordForLogin,
  companyAuth.createToken,
  companyActions.login
);
router.post("/answer", answerActions.add);

// Route to delete an item
router.delete("/announce/:id", announceActions.destroy);
router.delete("/company/:id", companyActions.destroy);
router.delete("/candidate/:id", candidateActions.destroy);

// Route to edit an item
router.put("/announce/:id", announceActions.edit);
router.put("/company/:id", companyActions.edit);
router.put("/candidate/:id", candidateActions.edit);
/* ************************************************************************* */

module.exports = router;
