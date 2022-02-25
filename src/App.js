import React, {useState, useEffect} from 'react'
import './static/styles/app.scss';
import Main from './components/Main';
import Loader from './components/Loader';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(()=> setLoading(false), 2000)
  }, [])

  return(
    <>
    {loading === false ? (
      <Main/>
    ):(
      <Loader/>
    )}
    </>

  )  
}

export default App;

/// ************ OLDER VERSION BELOW *************** ///

// // GLOBAL IMPORTS
// import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom'

// // STYLES IMPORT
// import './styles/app.scss'

// // COMPONENT IMPORTS
// import Routes from './constants/Routes';

// // KEY IMPORT ** FOR ACTIVE DOMAIN **
// // import { LICENSE_KEY, CARD_LICENSE_KEY } from '../.env/key';

// // MATERIAL.UI IMPORTS
// // import FormControlLabel from "@material-ui/core/FormControlLabel";
// // import Switch from "@material-ui/core/Switch";

// const App = () => {

//   return(
//     <>
//     <Router>
//       <Routes />
//     </Router>
//     </>
//   )  
// }

// export default App;
