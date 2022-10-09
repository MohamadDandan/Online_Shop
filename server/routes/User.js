const express = require('express');
const router = express.Router();
const { User } = require("../models")
const bcrypt = require('bcrypt');
const salt = 10
const { validateToken } = require('../middlewares/AuthM')

const { sign } = require('jsonwebtoken');


router.post("/", async(req, res) => {
    const { UserName, Email, Password, Gender, Country, DOB, UserTypeId } = req.body;

    const State = "Active";

    const hash2 = await bcrypt.hash(Password, salt);
    User.create({
        UserName: UserName,
        Email: Email,
        Password: hash2,
        Gender: Gender,
        Country: Country,
        DOB: DOB,
        UserTypeId: UserTypeId,
        State: State
    })
    res.json(hash2);

});

router.post('/login', async(req, res) => {

    const { UserName, Password } = req.body;

    const user = await User.findOne({
        where: { UserName: UserName }

    })
    if (!user) {
        res.json({ error: "User does not  exist" })
    }
    bcrypt.compare(Password, user.Password).then(async(match) => {
        if (!match) {
            res.json({ error: "wrong password" })
        }
        const accessToken = sign({
            UserName: user.UserName,
            id: user.id,
            UserTypeId: user.UserTypeId
        }, "importantsecret");

        res.json(accessToken)
    })
});
router.get("/getuserinfo", validateToken, async(req, res) => {
    const UserId = req.user.id;
    const user = await User.findOne({
        where: { id: UserId }

    })

    res.json(user)
})
router.get("/auth", validateToken, (req, res) => {


    res.json(req.user)
})
router.get("/ViewCustomer", async(req, res) => {
    const Customer = await User.findAll({ where: { UserTypeId: "1" }, attributes: { exclude: ['Password', 'createdAt', 'updatedAt'] } })
    res.json(Customer)
})
router.get("/ViewEmp", async(req, res) => {
    const emp = await User.findAll({ where: { UserTypeId: "2" }, attributes: { exclude: ['Password', 'createdAt', 'updatedAt'] } }, )
    res.json(emp)
})
router.get("/ViewAll", async(req, res) => {
    const All = await User.findAll(({ attributes: { exclude: ['Password', 'createdAt', 'updatedAt'] } }))
    res.json(All)
})
router.put("/auth", validateToken, (req, res) => {


    res.json(req.user)
})
router.put("/update/:id", async(req, res) => {
    const { State } = req.body
    const id = req.params.id;

    const cal = User.update({ State: State }, { where: { id: id } })

    res.json(cal)

})
router.post('/login2', async(req, res) => {

    const { UserName, Password } = req.body;

    const user = await User.findOne({
        where: { UserName: UserName }

    })
    if (!user) {
        res.json({ error: "User does not  exist" })
    }
    bcrypt.compare(Password, user.Password).then(async(match) => {
        if (!match) {
            res.json({ error: "wrong password" })
        }
        const accessToken = sign({
            UserName: user.UserName,
            id: user.id,
            UserTypeId: user.UserTypeId
        }, "importantsecret");

        if (user.State === "Active") {
            res.json(accessToken)
        } else {
            res.json({ error: "Your Are disactive connect to administrator to fix  it" })
        }
    })
});



module.exports = router