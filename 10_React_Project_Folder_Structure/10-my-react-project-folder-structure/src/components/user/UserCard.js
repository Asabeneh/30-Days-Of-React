import React from "react"

const UserCard = ({ user: { firstName, lastName, image } }) => (
    <div className='user-card'>
        <img src={image} alt={firstName} />
        <h2>
            {firstName}
            {lastName}
        </h2>
    </div>
)

export default UserCard