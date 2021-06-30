import React from 'react'
import { Link } from 'react-router-dom'

const UserItem = ({ user: { login, avatar_url } }) => (
  <div className="col-12 col-lg-3">
    <div className="bo-card">
      <div className="bo-card-head bg-gray-4">
        <img src={avatar_url} className="bo-photo" />
      </div>
      <div className="bo-card-body">
        <div className="text-center">
          <h3 className="mb-2">{login}</h3>
          <Link to={`/user/${login}`} className="bo-button is-small">Open Profile</Link>
        </div>
      </div>
    </div>
  </div>
)

export default UserItem
