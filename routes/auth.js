const router = require("express").Router();
const User = require("../models/User");


//REGISTER
router.get("/register", async (req, res) => {

    const user = await new User({
        username:"johndark",
        email:"jonhdark@gmail.com",
        password: "1234567"
    })

   await user.save()

   res.send("Ok")
   
 
});



module.exports = router;