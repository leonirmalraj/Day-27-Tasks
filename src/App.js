import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('./data.json')
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  const createUser = (newUser) => {
    setUsers([...users, { ...newUser, id: users.length + 1 }]);
  };

  const updateUser = (updatedUser) => {
    setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
  };

  const deleteUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  return (
    <div className="app-container">
      <h1>CRUD User App</h1>
      <div className="user-form-container">
        <h2>Add User</h2>
        <UserForm onSubmit={createUser} />
      </div>
      <div className="user-list-container">
        <h2>Users</h2>
        <UserList users={users} onUpdateUser={updateUser} onDeleteUser={deleteUser} />
      </div>
    </div>
  );
};

export default App;
