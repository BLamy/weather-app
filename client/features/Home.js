var React = require('react');

var LocationInputForm = require('../components/LocationInputForm');

var Home = React.createClass({
  render: function () {
    return (
      <div style={styles.contentContainer}>
        <h2 style={styles.title}>Enter yo city fool!</h2>
        <LocationInputForm />
      </div>
    );
  }
});

var styles = {
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },
  title: {
    color: 'blue',
    marginBottom: '20px'
  }
};

module.exports = Home;
