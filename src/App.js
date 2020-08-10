import React, { useEffect, createContext, useReducer, useContext } from 'react';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';

import NavBar from './components/screens/Navbar'
import Home from './components/screens/Home'
import SignIn from './components/screens/SignIn'
import Profile from './components/screens/Profile'
import SignUp from './components/screens/SignUp'
import CreatePost from './components/screens/CreatePost'

import { reducer, initialState } from './reducer/userReducer'

import './App.css';

export const UserContext = createContext()

const Routing = () => {
  const history = useHistory()
  const { state, dispatch } = useContext(UserContext)
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))

    if (user) {
      dispatch({ type: 'USER', payload: user })
    } else {
      history.push('/signin')
    }

  }, [])
  return (
    < Switch >
      <Route exact path='/' component={Home} />
      <Route path='/signin' component={SignIn} />
      <Route path='/profile' component={Profile} />
      <Route path='/signup' component={SignUp} />
      <Route path='/create' component={CreatePost} />
    </Switch >
  )
}


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <NavBar />
        <Routing />
      </BrowserRouter>
    </UserContext.Provider>

  );
}

export default App;
