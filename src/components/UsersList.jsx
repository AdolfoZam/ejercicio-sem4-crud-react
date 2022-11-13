import React from 'react';

const UsersList = ({usersList,selectUsers,deleteUsers}) => {
    return (
        <ul className='user-container'>
            {
                usersList.map(user => (
                    <li key={user.id} className= "user-data">
                        <div><b>First Name: </b>{user.first_name}</div>
                        <div><b>Last Name: </b>{user.last_name}</div>
                        <div><b>Email: </b>{user.email}</div>
                        <div><b>Birthday: </b>{user.birthday}</div>
                        <div className='user-button-container'>
                        <button onClick={() => selectUsers(user)} className="user-button edit-button">
                        <i class="fa-sharp fa-solid fa-pen-to-square"></i>
                        </button>
                        <button onClick={() => deleteUsers(user.id)} className="user-button delete-button"> 
                            <i className="fa-sharp fa-solid fa-trash"></i>
                        </button>
                        </div>
                    </li>
                ))
            }
         </ul>
    );
};

export default UsersList;