const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth.middleware');
const mapController = require("../controller/map.controller");
const { query } = require('express-validator');

router.get("/get-coordinates",
    [
        query("address")
            .isString()
            .trim()
            .isLength({ min: 3 })
            .withMessage("Address must be at least 3 characters long")
    ],
    authMiddleware.authUser,
    mapController.getcoordinates  // Make sure this matches the exported function name
);

module.exports = router;