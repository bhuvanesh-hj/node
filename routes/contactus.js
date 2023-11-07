const express = require('express');

const path = require('path');

const router = express.Router();
const routerDir = require('../utils/path')


router.get('/contactus',(req,res)=>{
    res.sendFile(path.join(routerDir,'views','contactus.html'))
})

module.exports = router;