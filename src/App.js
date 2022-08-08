
import Dashboard from './Dashboard/Dashboard';
import './App.css';
import {useDispatch} from 'react-redux';
// import {fetchData} from './store/Movies-action';
import  {userDataAction}  from "./CRUD-Saga/userDataSlice"
import { useEffect } from 'react';

function App() {
  // function that add two numbers

  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(fetchData());
    dispatch(userDataAction.getUserData());
    // localStorage.setItem('isLoggedIn',true );
  }, [dispatch]);
  return (
    <div className="App">
      <Dashboard/>
    </div>
  );
}

export default App;
