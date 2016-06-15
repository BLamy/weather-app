import React, { Component } from 'react'
import Radium from 'radium'

import { IndexLink } from 'react-router'

import LocationInputForm from '../components/LocationInputForm'

class App extends Component {
  constructor () {
    super()
    this.state = {
      contentHeight: 0
    }
  }

  handleResize () {
    const offset = 77
    const totalHeight = window.innerHeight
    const navHeight = this.refs.navbar.scrollHeight
    const contentHeight = totalHeight - navHeight - offset

    this.setState({
      contentHeight: contentHeight
    })
  }

  componentDidMount () {
    window.addEventListener('resize', this.handleResize)

    // initial resize
    this.handleResize()
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.handleResize.bind(this))
  }
  render () {
    const { navContainer, link, white, contentContainer, title } = styles
    const contentContainerHeight = {
      height: this.state.contentHeight + 'px'
    }

    return (
      <div>
        <nav ref='navbar' style={navContainer}>
          <IndexLink to='/' style={link}>
            <h1 style={[title, white]}>WTF's the weather?</h1>
          </IndexLink>

          <LocationInputForm mode='row' />
        </nav>

        <div style={[contentContainer, contentContainerHeight]}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

const styles = {
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
}

export default Radium(App)
