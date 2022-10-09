const express = require('express');
const router = express.Router();
const { UserType } = require("../models")
router.get("/", async(req, res) => {
    const List_UserType = await UserType.findAll({

    })
    res.json(List_UserType)
})
router.post("/", async(req, res) => {
    const UT = req.body
    await UserType.create(UT);
    res.json(UT);
})


module.exports = router