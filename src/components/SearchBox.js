import React from 'react'

const SearchBox = props => {
  console.log('SearchBox')
  return (
    <div className="pa2">
      <input
        onChange={props.searchChange}
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
      />
    </div>
  )
}

export default SearchBox
