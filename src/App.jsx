import './App.css'
import './normalize.css'
import axios from 'axios'
import UsersList from './components/UsersList'
import { useEffect, useState } from 'react'
import UsersForm from './components/UsersForm'

function App() {
  
    const [usersList,setUsersList] = useState([])
    const [userSelected,setUserSelected] = useState(null)

    useEffect(() => {
        axios.get("https://users-crud1.herokuapp.com/users/")
            .then(res => setUsersList(res.data))
    },[])

    const getUsers = () => {
      axios.get("https://users-crud1.herokuapp.com/users/")
           .then(res => setUsersList(res.data))
    }

    const selectUsers = (user) =>{
      setUserSelected(user)
    }

    const deselectUser = () => setUserSelected(null)

    const deleteUsers = (id) => {
        axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
             .then(() => getUsers())
      }

    console.log(usersList)
  return (
    <div className="App">
       <UsersForm 
    getUsers={getUsers} 
    userSelected={userSelected}
    deselectUser={deselectUser}
    />

    <UsersList 
    usersList={usersList} 
    selectUsers={selectUsers}
    deleteUsers={deleteUsers}
    />
   
    </div>
  )
}

export default App
