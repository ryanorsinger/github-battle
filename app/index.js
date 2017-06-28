var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

// Components have
// UI
// state
// lifecycle event

// component definition
class App extends React.Component {
    render() {
        return (
        <div> 
            Hello Everybody!
        </div>
        )
    }
}

// component invocation
ReactDOM.render(
    <App />,
    document.getElementById('app')
);