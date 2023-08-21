const React = require ('react'); 

class New extends React.Component{
    render() {
        <div>
            <h1>New vegetavle Page</h1>
            <form action='vegetables' method='POST'> 
            Name: <input type='text' name='name'/><br />
            Color: <input type='text' name='color' /><br /> 
            Is ready to Eat: <input type= 'checkbox' name='readyToEat'/><br />
            <input type='submit' value='Create Vegetable'/>
            </form>
        </div>
    }
}

module.export = New; 
