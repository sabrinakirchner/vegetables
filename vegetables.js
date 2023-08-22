//router 

const express = require('express');
const router = express.Router();
const vegetables = require('../models/vegetables');

//index 
router.get('/vegetables', async (req,res) =>{
    const vegetables = await Vegetable.find();
    res.render('vegetables/Index', { vegetables }); 
});

//show 
router.get('/vegetables/:id', async (req, res) => {
    const vegetable = await Vegetable.findById(req.params.id);
    res.render('vegetable/Show',{ vegetable });
});

//create route
router.post('/vegetables', async (req, res) =>{
    await Vegetable.create(req.body);
    res.redirect('/vegetables');
})



//new 
router.get('vegetables/new', (req,res) =>{
    vegetables.push(req.body);
    console.log(vegetables);
    res.redirect('vegetables');
});

module.exports = router; 
