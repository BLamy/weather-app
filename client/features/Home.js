import React from 'react'

import LocationInputForm from '../components/LocationInputForm'

function Home () {
  const { contentContainer, title } = styles
  return (
    <div style={contentContainer}>
      <h2 style={title}>Enter yo city fool!</h2>
      <LocationInputForm />
    </div>
  )
}

const styles = {
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
}

export default Home
