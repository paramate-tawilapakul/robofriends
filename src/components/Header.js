import React, { Component } from 'react'

class Header extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false
  }

  render() {
    console.log('Header')
    return <h1 className="f1">RoboFriends</h1>
  }
}

export default Header
