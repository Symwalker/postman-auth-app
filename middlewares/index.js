const jwt = require("jsonwebtoken");

const midddlewares = {
    authMiddleware : (req ,res , next)=>{
        console.log("hello");
        const token = req.headers.authorization.split(" ")[1];
        const isUserTrue = jwt.verify(token , "shayan")
        // console.log(token);
        // const user = true   
        if (isUserTrue) {
            next()
        } else {
            res.json({
                msg : "invalid user"
            })
        }
    
    },
}
module.exports = midddlewares