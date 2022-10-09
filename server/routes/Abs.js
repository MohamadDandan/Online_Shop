const express = require('express');
const router = express.Router();
const { Test, Posts, OTest } = require("../models")
const { validateToken } = require('../middlewares/AuthM')
const time = new Date();
const current = time.toLocaleString;
router.post("/:Pid", validateToken, async(req, res) => {
    const { Qun, OTestId } = req.body;
    const PostId = req.params.Pid
    const cal2 = OTest.update({ status: "in progress", updatedAt: current }, { where: { id: OTestId } })
    await Test.create({ Qun: Qun, PostId: PostId, OTestId: OTestId })
    res.json(Qun)

})
router.get("/order", validateToken, async(req, res) => {

    const UserId = req.user.id;
    const myOrder = await Test.findAll({ where: { UserId: UserId } })

    res.json(myOrder)

})
router.delete("/delete_by_emp/:id", async(req, res) => {
    const id = req.params.id;

    const r = await Test.destroy({ where: { id: id } })
    if (r) {
        const data = await Test.findAll({ attributes: { exclude: ['createdAt', 'updatedAt'] } })
        res.json(data)
    }
})
router.delete("/delete/:id", async(req, res) => {
        const id = req.params.id;

        const r = await Test.destroy({ where: { id: id } })

        res.json(r)
    })
    //
router.get("/UO/:id", async(req, res) => {

    const id = req.params.id;

    const myOrder2 = await Posts.findAll({
        attributes: { exclude: ["PostDetail", "PostRate", "createdAt", "updatedAt", "CateId"] },



        include: {
            model: Test,
            attributes: { exclude: ["updatedAt", "OTestId", 'PostId'] },
            where: { OTestId: id }

        }
    })

    res.json(myOrder2)

})

router.get("/", async(req, res) => {
    const ListPost = await Test.findAll(({ attributes: { exclude: ['createdAt', 'updatedAt'] } }))

    res.json(ListPost)


})
router.put("/updateQun/:id", async(req, res) => {
    const { Qun, OID } = req.body
    const id = req.params.id;

    Test.update({ Qun: Qun, updatedAt: current }, { where: { id: id } })

    const cal2 = OTest.update({ status: "in progress", updatedAt: current }, { where: { id: OID } })
    res.json(cal2)

})



module.exports = router