
const jwt = require('jsonwebtoken')
const userModel = require('../models/userModel')

const authenticate = async function(req, res, next) {
    try{
    let token = req.headers["x-auth-token"]
    if(!token) return res.status(400).send({status: false, msg: "token must be provided"})
    
    let decodedToken = jwt.verify(token , "functionup-thorium")   
    if(!decodedToken) return res.status(401).send({status: false, msg: "Invalid token"})

    next()
}catch (error){
    res.status(500).send({error : error.message})
}
}


const authorise = async function(req, res, next) {
    try{
    let userToBeModified = req.params.userId
    if(!userToBeModified) return res.status(400).send({status: false, msg: "invalid ID"})
    let token= req.headers["x-auth-token"]
    let decodedToken = jwt.verify(token , "functionup-thorium")
    let userLoggedIn=decodedToken.userId
    
  
    if(userToBeModified != userLoggedIn) return res.status(403).send({status: false, msg: "Unauthorized access"})
    next()
}catch (error){
    res.status(500).send({error: error.message})
}
}

module.exports.authenticate = authenticate;
 module.exports.authorise = authorise;