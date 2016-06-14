var React = require('react');
var Radium = require('radium');

var IndexLink = require('react-router').IndexLink;

var LocationInputForm = require('../components/LocationInputForm');

var App = React.createClass({
  getInitialState: function () {
    return {
      contentHeight: 0
    };
  },
  handleResize: function () {
    var offset = 77;
    var totalHeight = window.innerHeight;
    var navHeight = this.refs.navbar.scrollHeight;
    var contentHeight = totalHeight - navHeight - offset;

    this.setState({
      contentHeight: contentHeight
    });
  },
  componentDidMount: function () {
    window.addEventListener('resize', this.handleResize);

    // initial resize
    this.handleResize();
  },
  componentWillUnmount: function () {
    window.removeEventListener('resize', this.handleResize);
  },
  render: function () {
    var contentContainerHeight = {
      height: this.state.contentHeight + 'px'
    };

    return (
      <div>
        <nav ref='navbar' style={styles.navContainer}>
          <IndexLink to='/' style={styles.link}>
            <h1 style={[styles.title, styles.white]}>WTF's the weather?</h1>
          </IndexLink>

          <LocationInputForm mode='row' />
        </nav>

        <div style={[styles.contentContainer, contentContainerHeight]}>
          {this.props.children}
        </div>
      </div>
    );
  }
});

var styles = {
  navContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: 'blue'
  },
  contentContainer: {
    padding: '40px'
  },
  link: {
    textDecoration: 'none',
    color: 'white'
  },
  title: {
    margin: '0px',
    ':hover': {
      color: '#0CA5FF'
    }
  },
  // just an example for applying two styles to the same element via radium
  white: {
    color: 'white'
  }
};

module.exports = Radium(App);
