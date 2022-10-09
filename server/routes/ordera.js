const express = require('express');
const router = express.Router();
const { ordera } = require("../models")
const { validateToken } = require('../middlewares/AuthM')

router.post("/s", async(req, res) => {
    const { Qun, Address, } = req.body;
    //const PostId = req.params.Pid

    // await Test.create({ Qun: Qun, Address: Address, PostId: PostId })
    res.json(Qun + Address)

})







module.exports = router