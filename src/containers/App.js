import React, { Component } from 'react'
import { connect } from 'react-redux'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import './App.css'
import ErrorBoundry from '../components/ErrorBoundry'
import { setSearchField, requestRobots } from '../actions'
import Header from '../components/Header'
import CounterButton from '../components/CounterButton'

class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots()
  }

  // onSearchChange = event => {
  //
  //   this.props.setSearchField(event.target.value)
  // }

  render() {
    // const { searchField, robots, isPending } = this.props
    const { searchField, onSearchChange, robots, isPending } = this.props
    const filteredRobots = robots.filter(robot =>
      robot.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="tc">
        <Header />
        <CounterButton />
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          {isPending ? (
            <h1>Loading...</h1>
          ) : (
            <ErrorBoundry>
              <CardList robots={filteredRobots} />
            </ErrorBoundry>
          )}
        </Scroll>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

// const mapActionToProps = { setSearchField, requestRobots }

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
