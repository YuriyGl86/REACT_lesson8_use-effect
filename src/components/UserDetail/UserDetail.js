import { useState, useEffect } from "react"


export  function UserDetail({userData}) {
  const [loadingDetail, setLoadingDetail] = useState(true)
  const [detail, setDetail] = useState(null)
  console.log(userData.id)

  useEffect(()=>{
    fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${userData.id}.json`)
    .then(resp=>resp.json())
    .then(data=>{
      console.log(data)
      setDetail(data)
      setLoadingDetail(false)
    })
    
  }, [userData])

  return (
    <div className="details">
      {loadingDetail? (null): (<img src={detail.avatar}></img>)}
      <div className="field">
        <h3>{userData.name}</h3>
      </div>
      {loadingDetail? (<div>Loading...</div>): (
        <div>
          {/* <img src={detail?.avatar}></img> */}
          <div className="field">City: {detail.details.city}</div>
          <div className="field">Company: {detail.details.company}</div>
          <div className="field">Position: {detail.details.position}</div>
        </div>
      )}
    </div>
  )
}
