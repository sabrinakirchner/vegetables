const React = require('react');

class Index extends React.Component{
    render(){
        const {vegetables } = this.props; 
        return(
            <div>
                <h1>Vegetables Index Page </h1>
                <ul>
                    {vegetables.map((vegetable)=> (
                        <li key={vegetable._id}>
                            <a href={'/vegetables/${vegetable._id}'}>{vegetable.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        )
}
}

module.exports = Index; 