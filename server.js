const express = require('express');
const app = express(); 
//Where do we get Fruit From?
const fruits = require ('./models/fruits.js')
//const fruits =['apple','banana', 'pear'];

//vegetables 
const vegetablesRoutes = require('./routes/vegetables'); 
app.use('/', vegetablesRoutes);


//What two lines of code make our application able to use the JSX View Engine
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

app.get('/fruits', (req, res) =>{
    //res.send(fruits);
    res.render('index', {fruits: fruits});
});
///new
app.get('./fruits/new',(req,res) =>{
    res.render('New');
});


//show
app.get('/fruit/:indexOfFruitsArray', (req, res) =>{
    //res.send(fruits[req.params.indexOfFruitsArray]);
    res.render('show',{
        fruit: fruits[req.params.indexOfFruitsArray]
    })
});



//middleware = the logitc behind it. will run everytime
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});


//post Route
app.post('/fruits', (req, res)=>{
    if(req.body.readyToEat === 'on'){ //if checked, req.body.its on 
        req.body.readyToEat = true; //do some data correction
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false; //do some data correction
    }
    fruits.push(req.body);
    console.log(fruits);
    res.send('data received');
});



app.listenerCount(3000, () =>{
    console.log('listening'); 
})
