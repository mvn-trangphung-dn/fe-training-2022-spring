import './App.css';
import './assets/styling/styles.scss'
import Typography from '@material-ui/core/Typography';
import TodoForm from './feature/components/TodoForm';
import TodoList from './feature/components/TodoList';
import ModalConfirm from './feature/components/ModalConfirm';
import { useState } from 'react';

function App() {
  const [ users, setUsers ] = useState([]);
  const [ idUser, setIdUser ] = useState([]);
  const [ isVisible, setIsVisible ] = useState(false);

  const handleDelete = (id) => {
    const newUsers = users.filter((_, index) => index !== id);
    setUsers(newUsers);
    setIsVisible(false);
  }

  return (
    <div className="app">
      <Typography component="h4" variant="h4" className="title">New User</Typography>
      <TodoForm 
        saveUser = {(user) => {
          setUsers([...users, user]);
        }}/>
      {users.length > 0 &&
        (<>
          <Typography component="h4" variant="h4" className="title">List User</Typography>
          <TodoList
            users={users}
            deleteUser={(id, isVisible) => {
              setIdUser(id);
              setIsVisible(isVisible);
          }}/>
        </>)
        }
        <ModalConfirm
          isVisible={isVisible}
          title='Are you sure you want to delete this user?'
          onSubmit={() => handleDelete(idUser)}
          onCancel={() => setIsVisible(false)}
        />
      </div>
  );
}

export default App;
