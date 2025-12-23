// routes/auth.js
const express = require('express')
const router = express.Router()

// POST /logon route
 router.post('/logon',(req,res) =>{
    
    const {name} =req.body
    if(name){
        res.cookie("name", name)
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send('please provide the real names')
 })
 // POST /logoff route
router.post('/logoff', (req, res) => {
    const { name } = req.body
    
    if(name) {
        res.clearCookie("name")
         return res.status(200).json({ 
            success: true, 
            message: `User ${name} logged off successfully` 
        })
    }
    res.clearCookie("name")
    return res.status(400).json({
        success: false,
        message: 'Please provide a name', 
        time : new Date()
    
        })
        })


  module.exports = router