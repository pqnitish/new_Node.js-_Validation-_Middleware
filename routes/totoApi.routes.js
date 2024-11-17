const express = require("express");
const router = express.Router();
const validateRequest = require("../middlewares/validation.js");
// POST route for TOTO API
router.post("/",validateRequest,(req,res)=>{
    res.status(200).json({message:"data received"});
});
module.exports = router;