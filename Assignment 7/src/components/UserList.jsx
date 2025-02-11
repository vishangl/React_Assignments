
import React from 'react';

function UserList() {
  const users = [
    { id: 1, name: "Vishang", age: 25 },
    { id: 2, name: "Bhavik", age: 30 },
    { id: 3, name: "jenil", age: 22 },
  ];

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age} years old
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
