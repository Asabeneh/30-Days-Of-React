import React from 'react'
import styles from './Tags.module.css'

const Tags = (props) => {
  return (
    <p className={styles.container}>{props.skill}</p>
  )
}

export default Tags