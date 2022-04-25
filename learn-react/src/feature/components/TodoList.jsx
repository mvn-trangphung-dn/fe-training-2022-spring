import React from 'react';
import TodoItem from './TodoItem'

const TodoList = ({ users, deleteUser }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Password</th>
          <th>Gender</th>
          <th>Comment</th>
          <th>Country</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index)=> (
          <TodoItem 
            user={user}
            key={index} 
            deleteUser={() => {
              deleteUser(index, true);
            }}/>
        ))}
      </tbody>
    </table>
  )
}
export default TodoList;
