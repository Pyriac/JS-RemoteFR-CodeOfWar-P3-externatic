const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions

const annoncesActions = require("./controllers/annoncesActions");
const entreprisesActions = require("./controllers/entreprisesActions")

// Route to get a list of items
router.get("/annonces", annoncesActions.browse);
router.get("/entreprises", entreprisesActions.browse)

// Route to get a specific item by ID
router.get("/annonces/:id", annoncesActions.read);
router.get("/entreprises/:id", entreprisesActions.read);

// Route to add a new item
router.post("/annonces", annoncesActions.add);
router.post("/entreprises", entreprisesActions.add);

// Route to delete an item
router.delete("/annonces/:id", annoncesActions.destroy);
router.delete("/entreprises/:id", entreprisesActions.destroy);
/* ************************************************************************* */

module.exports = router;
