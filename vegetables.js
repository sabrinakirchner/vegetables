//router 

const express = require('express');
const router = express.Router();
const vegetables = require('../models/vegetables');

//index 
router('/vegetables', (req,res) =>{
    res.remder('vegetables/Index',{vegetables}); 
});

//show 
router.get('/vegetables/:indexOfVegetablesArray', (req,res) => {
    const vegetable = vegetables[req.params.indexOfVegetablesArray];
    res.render('vegetable/show',{vegetable});
});

//new 
route.get('vegetables/new', (req,res) =>{
    vegetables.push(req.body);
    console.log(vegetables);
    res.redirect('vegetables');
});

module.expoerts = router; 
