import React, { useEffect, useState } from 'react'
import Axios from 'axios'
const SearchBar = () => {
  let [data, setData] = useState([])

  useEffect(() => {
    Axios.get('https://dummyjson.com/users')
      .then((responce) => {
        setData(responce.data)
      })
      .catch(() => { })
  }, [])




  return <>
    <div className='container mt-5'>
      <pre>{JSON.stringify(data)}</pre>
      <div className='row'>
        <div className='col-md-8'>
          <table className='table table-hover'>
            <thead className='bg-dark text-white'>
              <tr>
                <th>id</th>
                <th>name</th>
                <th>email</th>
                <th>number</th>
              </tr>
            </thead>
            <tbody>
              {
                data.users.map((user) => {
                  return <tr>
                    <td>{user.id}</td>
                  </tr>
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </>
}

export default SearchBar