const express = require('express');

const path = require('path');

const router = express.Router();
const routerDir = require('../utils/path')


router.post('/success',(req,res)=>{
    res.sendFile(path.join(routerDir,'views','success.html'))
})

module.exports = router;