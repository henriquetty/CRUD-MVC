const User = require("../models/User");

const renderPage = async (req, res) => {
    const user = await User.findOne({
        where: {
            uuid: req.params.uuid,
        }
    });

   if (user) {
       return res.render("edit", {
           user
       });
   }

   return res.redirect("/");
}

const editUser = async (req, res) => {
    const { name, email, age } = req.body;
    User.update({name, email, age}, {
        where: {
            uuid: req.query.uuid,
        }
    });

    return res.redirect("/");
}

module.exports = {
    renderPage, editUser
};
