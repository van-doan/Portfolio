import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Main from '../components/Main'
import Projects from '../components/Projects'

const Routes = (props) => {
  return(
    <Switch>
      <Route exact path="/" component={Main}/>
      <Route path="/work/projects/:id" component={Projects}/>
    </Switch>
  )
}

export default Routes;

