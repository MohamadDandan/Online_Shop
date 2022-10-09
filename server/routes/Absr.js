const express = require('express');
const router = express.Router();
const { OTest } = require("../models")
const { validateToken } = require('../middlewares/AuthM')

router.post("/", validateToken, async(req, res) => {
    /*const { Qun, Address, } = req.body;
    const PostId = req.params.Pid

    await OTest.create({ Qun: Qun, Address: Address, PostId: PostId })*/
    const { status, Address } = req.body;

    const UserId = req.user.id;
    const n = await OTest.create({ status: status, Address: Address, UserId: UserId })
    if (n) {
        const data = await OTest.findOne({
            order: [
                ['id', 'DESC']
            ],
        });
        res.json(data)
    } else {
        res.json("error")
    }



})
router.get("/get", validateToken, async(req, res) => {
    const UserId = req.user.id;
    const ListPost = await OTest.findAll(({
        order: [
            ["updatedAt", "DESC"]
        ],
        where: { UserId: UserId },
        attributes: { exclude: ['UserId', ] }
    }))

    res.json(ListPost)


})
router.get("/getAll", async(req, res) => {

        const ListPost = await OTest.findAll(({ attributes: { exclude: ['UserId', 'updatedAt'] } }))

        res.json(ListPost)


    })
    /*router.update("/update", async(req, res) => {

        const ListPost = await OTest.update({ status: delee }, { where: { id: 30 } })

        res.json(ListPost)updateComent


    })*/
router.put("/update/:id", async(req, res) => {
    const { status } = req.body
    const id = req.params.id;

    const cal = OTest.update({ status: status }, { where: { id: id } })

    res.json(cal)

})
router.put("/updateComent/:id", async(req, res) => {
    const { comment } = req.body
    const id = req.params.id;

    const cal = OTest.update({ comment: comment }, { where: { id: id } })

    res.json(cal)

})


module.exports = router