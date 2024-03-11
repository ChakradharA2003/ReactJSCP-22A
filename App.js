import {Switch, Route} from 'react-router-dom'
import './App.css'
import About from './components/About/index'
import Contact from './components/Contact/index'
import Header from './components/Header/index'
import Home from './components/Home/index'
import NotFound from './components/NotFound/index'

const App = () => (
  <div className="bg-container">
    <div className="details-card">
      <Header />
      <div className="non-header-container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  </div>
)
export default App
