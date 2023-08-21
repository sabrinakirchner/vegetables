const react= require('react');

class Show extends react.Component{
    render(){
        const {vegetable } =this.props;
        return(
            <div>
                <h1>Show Page</h1>
                The {vegetable.name} is {vegetable.color}
                {vegetable.readyToEat ? 'It is read to eat': 'it is not ready to eat'}
            </div>
        );
    }
}

module.exports = Show; 