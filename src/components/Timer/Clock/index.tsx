import React from 'react'
import style from './Clock.module.scss'

export default function Clock() {
  return (
    <>
      <span className={style.clockNumber}>0</span>
      <span className={style.clockNumber}>0</span>
      <span className={style.clockDivisor}>:</span>
      <span className={style.clockNumber}>0</span>
      <span className={style.clockNumber}>0</span>
    </>
  )
}