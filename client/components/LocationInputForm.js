import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

// var getCities = require('../utils/getCities');

class LocationInputForm extends Component {
  constructor () {
    super ()
    this.state = {
      location: '',
      error: ''
    }
  }

  handleChangeLocation (e) {
    this.setState({
      location: e.target.value
    })
  }

  // reset the input value each time the component updates
  // such as when the app routes to a different view
  componentDidUpdate () {
    this.refs.locationInput.value = '';
  }

  setLocation (e) {
    e.preventDefault();

    if (!this.state.location) {
      const error = 'Error: Input field cannot be empty.'

      this.setState({
        error: error
      })

      console.warn(error)
    }
    // route to forecast with location param is it's in the right format
    else {
      this.setState({
        error: ''
      })

      this.context.router.push({
        pathname: '/forecast/' + encodeURI(this.state.location)
      })
    }
  }

  render () {
    const mode = this.props.mode
    const { rowContainer, error, button, input, columnContainer } = styles

    return (
      <div style={mode === 'row' ? rowContainer: columnContainer}>
        <form onSubmit={this.setLocation.bind(this)}>
         <input
            type='text'
            ref='locationInput'
            value={this.state.location}
            onChange={this.handleChangeLocation.bind(this)}
            placeholder='Boston'
            style={[
              input,
              this.state.error && error
            ]} />
          <button type='submit' style={button}>Get Weather</button>
        </form>
      </div>
    )
  }
}

LocationInputForm.propTypes = {
  mode: PropTypes.oneOf(['row', 'column']).isRequired
}

LocationInputForm.contextTypes = {
  router: PropTypes.object
}

LocationInputForm.defaultProps = {
  mode: 'row'
}

const styles = {
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
}

export default Radium(LocationInputForm)
