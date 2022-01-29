const User = require("../models/User");

const get = async (req, res) => {
    const userData = [];

    const users = await User.findAll();
    users.forEach(user => userData.push(user));
    
    res.render("index", {
        userData
    });
}

module.exports = { get };
