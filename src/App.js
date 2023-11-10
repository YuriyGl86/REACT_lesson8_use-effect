
import './App.css';
import { useEffect, useState } from 'react';
import { UserList } from './components/UserList';
import { UserDetail } from './components/UserDetail';

function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [userData, setUserData] = useState(null)

  const fetchData =async ()=>{
    const data = await fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json')
    const res = await data.json()
    setUsers(res)
  }
  
  const showDetail = (user) => {
    console.log(user)
    if(userData && (user.id === userData.id)) return
    setUserData(user)
  }
  
  useEffect(()=>{
    fetchData().then(()=>{setLoading(false)})

  }, [])


  useEffect(()=>{
    console.log('новый юзер')
  }, [userData])

  return (
    loading? (<div>Loading...</div>):
    <div className="container">
      <UserList list = {users} showDetail={showDetail}/>
      {userData? <UserDetail userData={userData}/>: null}
    </div>
  );
}

export default App;
