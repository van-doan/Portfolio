import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import Main from '../components/Main'
import Projects from '../components/Projects'

import PROJECT_1 from '../components/Projects/Project1'
import PROJECT_2 from '../components/Projects/Project2'
import PROJECT_3 from '../components/Projects/Project3'
import PROJECT_4 from '../components/Projects/Project4'
import PROJECT_5 from '../components/Projects/Project5'

const Routes = (props) => {
  // const { url } = useRouteMatch();
  return(
    <Switch>
      <Route exact path="/" component={Main}/>
      <Route path="/work/projects/:id" component={Projects}/>
      {/* <Route exact path={`${url}/work/projects/pokegotchi`} component={PROJECT_1}/>
      <Route exact path={`${url}/work/projects/flixr`} component={PROJECT_2}/>
      <Route exact path={`${url}/work/projects/eo-wayfarer`} component={PROJECT_3}/>
      <Route exact path={`${url}/work/projects/etelage`} component={PROJECT_4}/>
      <Route exact path={`${url}/work/projects/portfolio`} component={PROJECT_5}/> */}
    </Switch>
  )
}

export default Routes;

