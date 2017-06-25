var router = require('express').Router();

router.get('/login',(req,res)=>{
    res.send({message: 'Blog login called'});
});
module.exports=router;