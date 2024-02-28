import React from 'react';

const UserList = ({ users, onUpdateUser, onDeleteUser }) => {
    const handleEdit = (user) => {
        onUpdateUser(user);
    };

    const handleDelete = (userId) => {
        onDeleteUser(userId);
    };

    return (
        <div className="user-list">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <button className="edit-btn" onClick={() => handleEdit(user)}>Edit</button>
                                <button className="delete-btn" onClick={() => handleDelete(user.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;
