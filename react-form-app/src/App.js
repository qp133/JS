import logo from './logo.svg';
import './App.css';

function App() {
    const [usersList, setUsersList] = useState([]);
    const addUserHandler = (uName, uAge) => {
      setUsersList((prevUsersList)=> {
        return [
          ...prevUsersList,
          {name: uName, age: uAge, id: Math.random().toString()},
        ];
      });
    };
    return (
      <div className='App'>
        <AddUser onAddUser = {addUserHandler} />
        <UserList users = {usersList} />
      </div>
    );
}

export default App;
