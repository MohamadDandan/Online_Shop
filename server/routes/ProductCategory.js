const express = require('express');
const router = express.Router();
const { Cate } = require("../models")
router.get("/", async(req, res) => {
    const ListPost = await Cate.findAll({

    })
    res.json(ListPost)
})
router.post("/", async(req, res) => {
    const cate = req.body
    await Cate.create(cate);
    res.json(cate);
})


module.exports = router