import React from 'react'

export  function UserItem({ user, showDetail }) {
  return (
    <div id={user.id} onClick={({target})=>{showDetail({id:target.id, name: user.name})}} className="field">{ user.name } </div>
  )
}
