import React from 'react'
import styles from './Stripe.module.css'

const Stripe = (props) => {
  return (
    <div className={styles.container} style={{ backgroundColor: `${props.bgColor}` }}>{props.color}</div>
  )
}

export default Stripe