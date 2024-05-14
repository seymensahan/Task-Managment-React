import React from 'react'
import Navbar from './component/Navbar'
import Content1 from './component/content1'
import { BrowserRouter as Router, Routes,Route, Link, Switch } from 'react-router-dom'
import Services from "./component/Services"
import Skills from "./component/Skills"
import Contact from "./component/Contact"
import About from "./component/About"
import Content2 from './component/content2'
import Content3 from './component/content3'

function Home() {
    return (
        <>
         
            <Navbar />
            <Routes>
        <Route exact path='/Services' component={Services}> </Route>
          <Route path='/skills' component={Skills}></Route>
          <Route path='/contact' component={Contact}></Route>
          <Route exact path='/about' component={About}> </Route>
 </Routes>
          <Content1 />
          <Content2 />
          <Content3 />
        </>
    )
}

export default Home