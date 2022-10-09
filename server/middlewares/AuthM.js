const { verify } = require("jsonwebtoken")
const validateToken = (req, res, next) => {
    const accessToken = req.header("accessToken")

    if (!accessToken) {
        return res.json({ error: "user not logged in" });
    }
    try {
        const validateToken = verify(accessToken, "importantsecret");
        req.user = validateToken;

        if (validateToken) {
            return next();
        }
    } catch (err) {
        return res.json({ error: err })
    }

};
module.exports = { validateToken }