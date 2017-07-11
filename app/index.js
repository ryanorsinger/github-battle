var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');

require('./index.css');

// Components have
// UI, always UI
// many have state
// often some kind of lifecycle event
var userList = [
    { name: 'Tyler', friend: true },
    { name: 'Ryan', friend: true },
    { name: 'Michael', friend: false },
    { name: 'Mikenzi', friend: false },
    { name: 'Jessica', friend: true },
    { name: 'Dan', friend: false }
];

class Users extends React.Component {
  render() {
    var friends = this.props.list.filter(function(person) {
        return person.friend === true;
    });
    var notFriends = this.props.list.filter(function(person) {
       return person.friend === false;
    });
    return (
      <div>
        <h1>Friends</h1>
        <ul>
          { friends.map(function(person) {
            return <li key={person.name}>{person.name}</li>
          })}
        </ul>
        
        <hr />
        
        <h1> Non Friends </h1>
        <ul>
          { notFriends.map(function(person) {
            return <li key={person.name}>{person.name}</li>
          })}
        </ul>        
      </div>
    )
  }
}

Users.propTypes = {
    list: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        friend: PropTypes.bool.isRequired,
    }))
}


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
               <Users list={this.props.list} />
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
        list={userList}
    />,
    document.getElementById('app')
);