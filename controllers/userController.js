const User = require("../models/User");

const get = (req, res) => {
    res.render("adduser");
}

const post = async (req, res) => {
    const { name, email, age } = req.body;

    //needs to improve validation
    if (name && email && age !== null) {
        const userCreated = await User.create({ name, email, age });
        console.log(`User ${userCreated.name} created with UUID of: ${userCreated.uuid}`);
    }

    return res.redirect("/");
}

const editUser = async (req, res) => {
    
}

module.exports = { get, post };
