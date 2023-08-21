const React = require('react');

class Index extends React.Component{
    render(){
        const {vegetables } = this.props; 
        return(
            <div>
                <h1>Vegetables Index Page </h1>
                <ul>
                    {vegetables.map((vegetable, i)=> (
                        <li key={i}>
                            <a href={'/vegetables/${i}'}>{vegetable.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        )
}
}

module.exports = Index; 