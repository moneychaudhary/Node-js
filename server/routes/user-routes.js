var router = require('express').Router();

router.get('/login',(req,res)=>{
    res.send({message: 'User login called'});
});

module.exports=router;