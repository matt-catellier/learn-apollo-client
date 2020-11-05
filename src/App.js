import { Route, Switch, Redirect } from 'react-router-dom'

import Nav from './Nav'
import Home from './Home'
import ExchangeRates from './ExchangeRates'


function App() {
  return (
    <div style={{padding: '10px'}}>
      <div>
        <Nav />
      </div>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/get-started" component={ExchangeRates} />
          <Redirect to="/" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
