const User = require("../models/User");

const renderPage = (req, res) => {
    res.render("edit");
}

module.exports = {
    renderPage
};
