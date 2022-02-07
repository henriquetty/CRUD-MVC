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

   return res.redirect("/?error=userNotFound");
}

const editUser = async (req, res) => {
    const { name, email, age } = req.body;
    
    User.findOne({
        where: {
            uuid: req.query.uuid,
        }
    }).then((user) => {
        user.update({ name, email, age });
        return res.redirect("/");
    }).catch(() => {
        return res.redirect("/?error=invalidUUID");
    });
}

module.exports = {
    renderPage, editUser
};
