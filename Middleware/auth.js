const jwt = require("jsonwebtoken");
const { model } = require("mongoose");
exports.auth = (req, res, next) => {
    const authHeader = req.headers["authorization"];

    if (!authHeader) {
        return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, "0000");
        req.user = decoded; // contains id + role
        next();
    } catch (err) {
        res.status(403).json({ message: "Invalid token" });
    }
};