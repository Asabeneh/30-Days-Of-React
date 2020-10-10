import React from 'react'

// User Card Component
const UserCard = ({ user: { firstName, lastName, image } }) => (
  <div className='user-card'>
    <img src={image} alt='asabeneh image' />

    <h2>
      {firstName}
      {lastName}
    </h2>
  </div>
)

export default UserCard
