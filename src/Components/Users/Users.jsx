import React from 'react'

import { UserItem } from 'Components'

const Users = ({ users, loading }) => {
  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="row">
      {
        users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))
      }
    </div>
  )
}

export default Users
