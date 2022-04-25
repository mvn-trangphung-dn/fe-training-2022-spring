import React from 'react';

const TodoItem = ({ user, index, deleteUser }) => {
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.password}</td>
      <td>{user.gender}</td>
      <td>{user.comment}</td>
      <td>{user.country}</td>
      <td><button className="btn-delete" 
                  onClick={() => {
                  deleteUser(index, true);
                  }}>
          Delete</button>
      </td>
    </tr>
  )
}
export default TodoItem;
