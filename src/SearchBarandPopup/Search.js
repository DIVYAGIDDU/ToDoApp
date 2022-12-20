import Axios from "axios";
import React, { useEffect, useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import { Modal, ModalHeader, ModalBody } from "reactstrap"
import './Search.css'
const Search = () => {
  let [data, setData] = useState([])
  let [searchName, setSearchName] = useState("")
  let [founderUsers, setFoundUsers] = useState([])
  let [singleUser, setSingleUser] = useState([])
  let [modal, setModal] = useState(false)
  useEffect(() => {
    Axios.get('https://dummyjson.com/users')
      .then((responce) => {
        setFoundUsers(responce.data.users)
        setData(responce.data.users)
      })
      .catch(() => { })
  }, [])


  let getSearchName = (e) => {
    setSearchName(e.target.value)
    
    setModal(true)
  }
  let filteredUser = (searchName) => {
    if (searchName === "") { alert("please Fill The Field") }
    else {
      let result = data.filter((singleUser) => {
        return singleUser.firstName.toLowerCase().includes(searchName.toLowerCase())
      })
      setFoundUsers(result)
    }
  }

let setUser=(user)=>{
setModal(true)
setSingleUser(user)
console.log(user)
}

  let refreshFun = () => {
    let searchName = ""
    if (searchName === "") {
      setFoundUsers(data)
    }
  }
  return <div className="container mt-5">
    <pre>{JSON.stringify(data)}</pre>
    <pre>{JSON.stringify(searchName)}</pre>
    <div className="row">
      <div className="col-md-8 mt-5">
        <div>
          <input type="search" placeholder="Find Your User..." className="search-input" onChange={getSearchName} onFocus={refreshFun} required/>
          <div className="searchIcon" onClick={filteredUser.bind(this, searchName)}><SearchIcon /></div>
        </div>
        <table className="table table-hover mt-5">
          <thead className="bg-dark text-white">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {
              founderUsers.length > 0 ? <>
                {
                  founderUsers.map((user) => {
                    return <tr key={user.id} onClick={setUser.bind(this,user)} >
                      <td>{user.id}</td>
                      <td>{user.firstName}</td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                    </tr>
                  })
                }

              </> : <h1>Not Found User...!</h1>
            }

          </tbody>
        </table>
      </div>
      <div className='col-md-4'>
      {
        modal ? <><div>
          <Modal size='md' isOpen={modal} className='popup'>
            <ModalHeader toggle={() => { setModal(!modal) }}>
            <div id=" card-header">
            <center key={singleUser.id}><img src={singleUser.image} alt="no-pic" /></center>
        </div>
            </ModalHeader>
            <ModalBody>
    <div >
            <ul  className="list-group" >
                <li className="list-group-item"><b>Name : </b>{singleUser.firstName}</li>
                <li className="list-group-item"><b>Id : </b>{singleUser.id}</li>
                <li className="list-group-item"><b>Email : </b>{singleUser.email}</li>
              <li className="list-group-item"><b>Phone : </b>{singleUser.phone}</li>
            </ul>
        </div>
            </ModalBody>
          </Modal>

        </div>
        </> : null
      }

      </div>
    </div>
  </div>
}
export default Search