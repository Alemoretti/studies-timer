import React, { useState } from 'react'
import style from './List.module.scss'
import Item from './Item'

function List () {
    const [tasks, setTasks] = useState([{
      task: 'React',
      time: '02:00:00'
  },
  {
      task: 'Javascript',
      time: '01:00:00'
  },
  {
      task: 'Typecript',
      time: '03:00:00'
  }])

    return (
        <aside className={style.taskList}>
            <h2 onClick={() => {
              setTasks([...tasks, {task: 'State', time: '05:00:00'}])
            }}> Day&apos;s studies</h2>
            <ul>
                {tasks.map((item, index) => (
                  <Item
                  key={index}
                  {...item}
                  />
                ))}
            </ul>
        </aside>
    )
}

export default List