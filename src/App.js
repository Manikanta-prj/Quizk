import './App.css';
import Landing from './components/Landing';
import Results from './components/Results';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Quiz from './components/quiz';



function App() {

  return (
    <div className='AppMain'>
      <Router>
        <Switch>
            <Route exact path='/' component={Landing} />
          <Route exact path='/quiz' component={Quiz} />
          <Route exact path='/results' component={Results} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
