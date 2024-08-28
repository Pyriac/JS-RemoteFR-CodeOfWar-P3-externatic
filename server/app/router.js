const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const { browse, read, add } = require("./controllers/itemActions");
const annoncesActions = require("./controllers/annoncesActions");

// Route to get a list of items
router.get("/items", browse);
router.get("/annonces", annoncesActions.browse);

// Route to get a specific item by ID
router.get("/items/:id", read);
router.get("/annonces/:id", annoncesActions.read);

// Route to add a new item
router.post("/items", add);
router.post("/anonces", annoncesActions.add);

// Route to delete an item

router.delete("/annonces/:id", annoncesActions.delete);
/* ************************************************************************* */

module.exports = router;
