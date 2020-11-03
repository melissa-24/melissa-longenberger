import React from 'react'
import { Switch, Route} from 'react-router-dom'

import './css/core.css'

import NavBar from './components/nav/NavBar'
import NavSmall from './components/nav/NavSmall'

import Home from './components/Home'
import Projects from './components/Projects'
import PastProjects from './components/PastProjects'
import Resume from './components/Resume'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className="main">
      <header>
        <div className='head'>
          <img src='http://images.craftsnherbs.com/new-melissa.jpg' alt='Melissa' />
          <div className='heading'>
            <h1>Melissa Longenberger</h1>
            <h3>Full Stack Web Developer</h3>
          </div>
        </div>
        <nav>
          <NavBar />
          <NavSmall />
        </nav>
      </header>
      <Switch>
        <Route path='/Current Projects'>
          <Projects />
        </Route>
        <Route path='/Past Projects'>
          <PastProjects />
        </Route>
        <Route path='/Resume'>
          <Resume />
        </Route>
        <Route path='/Contact Me'>
          <Contact />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
      <footer>
        <p>Melissa Longenberger &#169; 2020</p>
        <p>Base react app created using npm package Lambda-React by a fellow Lambda Student</p>
      </footer>
    </div>
  );
};

export default App;