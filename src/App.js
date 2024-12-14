import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';
import Container from './components/layout/Container';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import Projects from './components/pages/Projects';
import Project from './components/pages/Project';

function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Container customClass ="min-height">
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/company'>
           <Company/>
          </Route>
          <Route path='/projects'>
           <Projects/>
          </Route>
          <Route path='/contact'>
            <Contact/>
          </Route>
          <Route path='/newproject'>
            <NewProject/>
          </Route>
          <Route path='/project/:id'>
            <Project/>
          </Route>
        </Container>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
