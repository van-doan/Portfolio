import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Main2 from '../components/Main2'
import Projects from '../components/Projects'

const Routes = (props) => {
  return(
    <Switch>
      <Route exact path="/" component={Main2}/>
      <Route path="/work/projects/:id" component={Projects}/>
    </Switch>
  )
}

export default Routes;

