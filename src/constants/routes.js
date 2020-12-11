import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Main from '../components/Main'
import Projects from '../components/Projects'
// export const PROJECT_1 = '/work/pokegotchi'
// export const PROJECT_2 = '/work/flixr'
// export const PROJECT_3 = '/work/eo-wayfarer'
// export const PROJECT_4 = '/work/etelage'
// export const PROJECT_5 = '/work/portfolio'

const Routes = (props) => {
  return(
    <Switch>
      <Route exact path="/" component={Main}/>
      <Route exact path="/work/projects" component={Projects}/>
    </Switch>
  )
}

export default Routes;

