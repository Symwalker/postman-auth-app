const express = require("express")
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./routes/route");

// const app = express();
// const PORT = process.env.PORT || 5000;
// const userModel = require("./models/userSchema");
// const bcrypt = require("bcryptjs")
// const jwt = require("jsonwebtoken");
// const midddlewares = require("./middlewares");


const app = express();

const PORT = process.env.PORT || 8000;
const BASE_URI = `mongodb+srv://Shayan:Kingfu_12@learning-cluster.qobbvco.mongodb.net/auth_app`
mongoose
    .connect(BASE_URI)
    .then((res) => console.log("MongoDb Connected"))
app.use(express.json());
app.use(cors());
app.use("/api",router)



//middleWare


app.listen(PORT, () => console.log(`server running on localhost:${PORT}`));