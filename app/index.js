var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');

require('./index.css');

// Components have
// UI, always UI
// many have state
// often some kind of lifecycle event

class Avatar extends React.Component {
    render() {
        return <img src={this.props.img} alt='avatar' />
    }
}
class Label extends React.Component {
    render() {
        return <h1>Name: {this.props.name} </h1>
    }
}

class ScreenName extends React.Component {
    render() {
        return <h3>Username: {this.props.username}</h3>
    }
}

class Badge extends React.Component {
    render() {
        return (
            <div>
               <Avatar img={this.props.img} />
               <Label name={this.props.name} />
               <ScreenName username={this.props.username} />
            </div>
        )
    }
}

Badge.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
}


ReactDOM.render(
    <Badge
        name='Ryan Orsinger'
        username='ryanorsinger'
        img='https://avatars3.githubusercontent.com/u/5657581?v=3&s=460'
    />,
    document.getElementById('app')
);