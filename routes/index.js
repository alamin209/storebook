const express  =require('express')
const router = express.Router()

//@desc Login/nadging page 
//route Get/
router.get( '/login', (req,res)=>{
    res.render('Login',{layout:'login'});
})

router.get( '/', (req,res)=>{
    res.render('Login',{layout:'login'});
})

//dashboard
router.get( '/dashboard', (req,res)=>{
    res.render('dashboard');
})
module.exports  = router 