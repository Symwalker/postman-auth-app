const express = require("express")
const authController = require("../controller/authControllers")
const router  = express.Router()



// router.get("/check",authController.check)

// This all is about signUp api
router.post("/signup" ,authController.signUp)


router.post("/login",authController.logIn)


// app.get("/api/check",midddlewares.authMiddleware,(req ,res)=>{
//     res.json({msg:"API hit........."})
// })
module.exports = router