const User = require("../models/User");

const renderPage = (req, res) => {
    return res.render("adduser");
};

const addUser = async (req, res) => {
    const { name, email, age } = req.body;

    const userExist = await User.findOne({
        where: {
            email
        }
    });

    if (!userExist) {        
        if (name && email && age !== null) {
            const userCreated = await User.create({ name, email, age });
            console.log(`User ${userCreated.name} created with UUID of: ${userCreated.uuid}`);
            return res.redirect("/");
        }
    }

    return res.redirect("/?error=emailTaken");
};

module.exports = {
    renderPage, addUser
}
