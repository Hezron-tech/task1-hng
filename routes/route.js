const express = require('express')
const router = express.Router()


const data={
    "slackUsername": "Hezron Kiprop",
    "Backend":true,
    "age":23,
    "bio":'Fullstack developer'  
}

router.get('/getAll' ,(req,res)=>{
    res.json(data)
})




module.exports = router;