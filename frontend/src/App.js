import React from 'react'
import Login from './Login'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from './Signup'
import Home from './Home'


function App(){
  return (
  
    <Routes>
        <Route exact path='/login' element={<Login />}> </Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/home' element={<Home />}></Route>
 </Routes>
  
  )
}

export default App