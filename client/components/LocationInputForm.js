var React = require('react');
var Radium = require('radium');

// var getCities = require('../utils/getCities');

var LocationInputForm = React.createClass({
  propTypes: {
    mode: React.PropTypes.oneOf(['row', 'column']).isRequired
  },
  contextTypes: {
    router: React.PropTypes.object
  },
  getDefaultProps: function () {
    return {
      mode: 'row'
    };
  },
  getInitialState: function () {
    return {
      location: '',
      error: ''
    };
  },
  handleChangeLocation: function (e) {
    this.setState({
      location: e.target.value
    });
  },
  setLocation: function (e) {
    e.preventDefault();

    if (!this.state.location) {
      var error = 'Error: Input field cannot be empty.'

      this.setState({
        error: error
      });

      console.error(error);
    }
    // route to forecast with location param is it's in the right format
    else {
      this.setState({
        error: ''
      });

      this.context.router.push({
        pathname: '/forecast/' + encodeURI(this.state.location),
      });
    }
  },
  render: function () {
    var mode = this.props.mode;

    return (
      <div style={mode === 'row' ? styles.rowContainer: styles.columnContainer}>
        <form onSubmit={this.setLocation}>
         <input
            type='text'
            ref='locationInput'
            value={this.state.location}
            onChange={this.handleChangeLocation}
            placeholder='Boston'
            style={[
              styles.input,
              this.state.error && styles.error
            ]} />
          <button type='submit' style={styles.button}>Get Weather</button>
        </form>
      </div>
    );
  }
});

var styles = {
  rowContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  columnContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  button: {
    color: 'blue',
    backgroundColor: 'white',
    border: '2px solid blue',
    padding: '5px',
    ':hover': {
      backgroundColor: '#0CA5FF',
      color: 'white'
    }
  },
  input: {
    border: '2px solid blue',
    height: '32px',
    color: 'blue',
    paddingLeft: '5px',
    marginRight: '5px'
  },
  error: {
    border: '2px solid red',
    color: 'red'
  }
};

module.exports = Radium(LocationInputForm);
