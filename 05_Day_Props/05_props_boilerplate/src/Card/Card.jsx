import React from 'react'
import ReactDOM from 'react-dom'


const UserCard = (props) => (
    <div className='user-card'>
        <img src={props.user.image} alt={props.user.firstName} />
        <h2>
            {props.user.firstName}
            {props.user.lastName}
        </h2>
        <h3>{props.info.profession}</h3>
    </div>
)

export default UserCard;