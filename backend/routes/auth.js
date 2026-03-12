const express = require("express")
const router = express.Router()

const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const User = require("../schemas/UserSchema")

// signup
router.post("/signup", async (req,res)=>{

const {username,email,password} = req.body

try{

const userExist = await User.findOne({email})

if(userExist){
return res.status(400).json({message:"User already exists"})
}

const hashPassword = await bcrypt.hash(password,10)

const user = new User({
username,
email,
password:hashPassword
})

await user.save()

res.json({message:"Signup successful"})

}catch(err){

res.status(500).json({message:"Server error"})

}

})


// login
router.post("/login", async (req,res)=>{

const {email,password} = req.body

try{

const user = await User.findOne({email})

if(!user){
return res.status(400).json({message:"User not found"})
}

const match = await bcrypt.compare(password,user.password)

if(!match){
return res.status(400).json({message:"Invalid password"})
}

const token = jwt.sign(
{ id:user._id },
"zerodha-secret",
{expiresIn:"1d"}
)

res.json({
token,
user:{
id:user._id,
username:user.username,
email:user.email
}
})

}catch(err){

res.status(500).json({message:"Server error"})

}

})

module.exports = router;