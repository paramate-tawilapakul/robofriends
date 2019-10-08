import React from 'react'
import Card from './Card'

const CardList = ({ robots }) => {
  //if (true) throw new Error('NOOOOOOO')
  console.log('CardList')
  return (
    <div>
      {robots.map(robot => {
        return (
          <Card
            id={robot.id}
            name={robot.name}
            email={robot.email}
            key={robot.id}
          />
        )
      })}
    </div>
  )
}

export default CardList
