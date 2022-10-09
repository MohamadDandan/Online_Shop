const express = require('express');
const router = express.Router();
const { Posts, Likes } = require("../models")
const { validateToken } = require('../middlewares/AuthM')
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

router.get("/", async(req, res) => {
    const ListPost = await Posts.findAll({
        order: [
            ['id', 'DESC']
        ]
    })
    res.json(ListPost)
})
router.get("/all", async(req, res) => {
    const ListPost = await Posts.findAll()

    res.json(ListPost)
})
router.get("/search/:search", async(req, res) => {

    const search = req.params.search;
    const ListPost = await Posts.findAll({
        where: {
            PostName: {
                [Op.like]: `%${search}%`
            }
        }
    });

    res.json(ListPost)
})
router.get("/trending", async(req, res) => {
    const ListPost = await Posts.findAll({

        order: [
            ["PostRate", "DESC"]
        ],
        limit: 3
    })
    res.json(ListPost)
})
router.get("/byId/:id", async(req, res) => {
    const id = req.params.id
    const post = await Posts.findByPk(id, { include: [Likes] })

    res.json(post)
})
router.get("/cate/:id", async(req, res) => {
    const id = req.params.id
    const post = await Posts.findAll({ where: { CateId: id } })

    res.json(post)
})
router.get("/N", validateToken, async(req, res) => {
    const ListPost = await Posts.findAll({ include: [Likes] })

    const LikedPost = await Likes.findAll({ where: { UserId: req.user.id } })
    res.json({ ListPost: ListPost, LikedPost: LikedPost })
})
router.post("/", async(req, res) => {
    const post = req.body
    await Posts.create(post);
    res.json(post);
})
router.delete("/delete/:id", async(req, res) => {
    const id = req.params.id;

    const r = await Posts.destroy({ where: { id: id } })
    if (r) {
        const data = await Posts.findAll()
        res.json(data)
    }
})
router.put("/Rate", async(req, res) => {
    const { PostRate, id } = req.body


    const cal = Posts.update({ PostRate: PostRate }, { where: { id: id } })

    res.json(cal)

})
router.put("/update_Price/:id", async(req, res) => {
    const { PostPrice } = req.body
    const id = req.params.id;

    const cal = Posts.update({ PostPrice: PostPrice }, { where: { id: id } })

    res.json(cal)

})
router.get("/report", async(req, res) => {
    const getData_postname = await Posts.findAll({
        attributes: {
            exclude: ['id', 'PostPrice', 'PostDetail', 'createdAt', 'updatedAt', 'CateId']
        }
    })
    const getData_PostRate = await Posts.findAll({
        attributes: {
            exclude: ['id', 'PostPrice', 'PostName', 'PostDetail', 'createdAt', 'updatedAt', 'CateId']
        }
    })
    res.json(getData_postname)
})

module.exports = router