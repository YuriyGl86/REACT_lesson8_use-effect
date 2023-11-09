import { UserItem } from "../UserItem"

export  function UserList({ list, showDetail }) {
    console.log(list)
  return (
        <div>UserList
            {list.map(user=>{
                return <UserItem user={user} key={user.id} showDetail={showDetail}/>
            })}
        
        </div>
    )
}
