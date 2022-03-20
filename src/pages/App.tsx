import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { LandingPage } from 'src/pages/LandingPage'
import { Home } from 'src/pages/Home'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/dashboard" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
