import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { List, ListItem, ListItemSecondaryAction, ListItemText, Checkbox } from '@material-ui/core';

const TodoList = ({ users, deleteUser }) => (
  <List>
    {users.map((user, index) => (
      <ListItem key={index.toString()} dense button>
        <Checkbox tabIndex={-1} disableRipple />
        <ListItemText primary={user.name} />
        <ListItemText primary={user.password} />
        <ListItemText primary={user.gender} />
        <ListItemText primary={user.comment} />
        <ListItemText primary={user.country} />
        <ListItemSecondaryAction>
          <IconButton
            aria-label="Delete"
            onClick={() => {
              deleteUser(index);
            }}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    ))}
  </List>
);

export default TodoList;
