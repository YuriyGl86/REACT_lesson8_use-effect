import { UserItem } from "../UserItem"

export  function UserList({ list, showDetail }) {
    
  return (
        <div className="user-list">
            {list.map(user=>{
                return <UserItem user={user} key={user.id} showDetail={showDetail}/>
            })}
        
        </div>
    )
}
