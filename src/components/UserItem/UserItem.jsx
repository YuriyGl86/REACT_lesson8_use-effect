import React from 'react'

export  function UserItem({ user, showDetail }) {
  return (
    <div id={user.id} onClick={(e)=>{showDetail(e.target.id)}}>{ user.name } </div>
  )
}
