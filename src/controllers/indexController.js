const User = require("../models/User");

const renderPage = async (req, res) => {
    const userData = [];

    const users = await User.findAll();
    users.forEach(user => userData.push(user));
    
    res.render("index", {
        userData
    });
}

module.exports = { renderPage };
