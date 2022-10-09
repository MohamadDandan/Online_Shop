const express = require('express');
const router = express.Router();
const { Likes } = require("../models")
const { validateToken } = require('../middlewares/AuthM')

router.post("/", validateToken, async(req, res) => {
    const { PostId } = req.body;
    const UserId = req.user.id;
    const check = await Likes.findOne({
        where: {
            PostId: PostId,
            UserId: UserId
        }
    })
    if (!check) {
        await Likes.create({ PostId: PostId, UserId: UserId })
        res.json("ss")
    } else {
        await Likes.destroy({
            where: {
                PostId: PostId,
                UserId: UserId
            }
        })
    }
    res.json("nss")
})
router.post("/c", validateToken, async(req, res) => {
    const { PostId } = req.body;
    const UserId = req.user.id;

    await Likes.create({ PostId: PostId, UserId: UserId })
    res.json("sfs")

})




module.exports = router