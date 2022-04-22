import './App.css';
import './assets/styling/styles.scss'
import Typography from '@material-ui/core/Typography';
import TodoForm from './feature/components/TodoForm';
import TodoList from './feature/components/TodoList';
import { useState } from 'react';

function App() {
  const [ users, setUsers ] = useState([]);
  return (
    <div className='app'>
      <Typography component="h4" variant="h4" className='title'>
        New User
      </Typography>
      <TodoForm 
        saveUser = {(user) => {
          setUsers([...users, user]);
        }}/>
      <Typography component="h4" variant="h4" className='title'>
        List User
      </Typography>
      {!!users 
        ? (<>
          <TodoList
            users={users}
            deleteUser={(id) => {
              const newUsers = users.filter((_, index) => index !== id);
              setUsers(newUsers);
            }} />
        </>)
        : (<>
          <small>No data</small>
        </>)}
      </div>
  );
}

export default App;
