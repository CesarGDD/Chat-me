import React, { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import IMessage from './components/imessage/IMessage';
import { selectUser, login, logout } from './features/userSlice';
import Login from './auth/Login';
import {auth} from './firebase';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
  auth.onAuthStateChanged(authUser => {
    if(authUser) {
      //user logged in
      dispatch(login({
        uid: authUser.uid,
        photo: authUser.photoURL,
        email: authUser.email,
        displayName: authUser.displayName
      }))
    }else {
      //user is logged outh
      dispatch(logout());
    }
  })
  },[dispatch])

  return (
    <div className="app">
      {user ? <IMessage /> : <Login /> }
    </div>
  );
}

export default App;
