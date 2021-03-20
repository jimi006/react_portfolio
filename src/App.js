import React from 'react';
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom';
import {Header, Home, Skill, Portfolio, Footer} from './components/index';

function App() {
  return (
    <>
      <Router>
        <Header />
        <main class="p-3">
          <section class="tab-content mt-5 container">
            <Switch>
              <Route exact path={"/"} component={Home} />
              <Route exact path={"/skills"} component={Skill} />
              <Route exact path={"/portfolio"} component={Portfolio} />
            </Switch>
          </section>
        </main>
      </Router>
      <Footer />
    </>
  );
}

export default App;
