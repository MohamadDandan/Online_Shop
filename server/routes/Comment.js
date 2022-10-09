const express = require('express');
const router = express.Router();
const { Comment } = require("../models")
const { validateToken } = require("../middlewares/AuthM")

router.get("/:postId", async(req, res) => {
    const postId = req.params.postId
    const comment = await Comment.findAll({
        where: { PostId: postId }
    })
    res.json(comment)
})
router.post("/", validateToken, async(req, res) => {
    const comment = req.body
    const username = req.user.UserName
    comment.UserName = username
    await Comment.create(comment);
    res.json(comment);
})







module.exports = router