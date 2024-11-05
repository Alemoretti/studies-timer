import React from 'react'
import Button from '../Button'
import Clock from './Clock'

export default function Timer() {
  return (
    <div>
      <p>Choose a card and start the timer</p>
      <div>
        <Clock />
      </div>
      <Button>
        Start!
      </Button>
    </div>
  )
}