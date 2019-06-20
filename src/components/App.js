import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { withSession } from '../containers/auth/withSession';
import AllCharacters from '../containers/characters/AllCharacters';
import CharacterById from '../containers/characters/CharacterById';
import Callback from '../containers/auth/Callback';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={withSession(AllCharacters)} />
        <Route exact path="/callback" component={Callback} />
        <Route exact path="/:id" component={withSession(CharacterById)} />
      </Switch>
    </Router>
  );
}
