const User = require("../models/User");

const deleteUser = async (req, res) => {
    if (req.query.uuid != undefined && req.query.uuid != null) {
        await User.destroy({
            where: {
                uuid: req.query.uuid,
            }
        });
    };
    
    return res.redirect("/");
};

module.exports = { 
   deleteUser
};
