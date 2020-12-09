// GLOBAL IMPORTS
import React, { useState } from 'react';

// STYLES IMPORT
import './styles/app.scss'

// COMPONENT IMPORTS
import Main from './components/Main';
import Navbar from './components/Navbar';

// KEY IMPORT ** FOR ACTIVE DOMAIN **
// import { LICENSE_KEY, CARD_LICENSE_KEY } from '../.env/key';

// MATERIAL.UI IMPORTS
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

const App = () => {
  const [theme, setTheme] = useState({
    dark: true
  });
  
  const handleChangeTheme = event => {
  setTheme({ ...theme, [event.target.name]: event.target.checked });
  };
  
  const currentTheme = theme.dark === true ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", currentTheme);
  
  const toggleTheme = (
  <Switch
  checked={theme.dark}
    onChange={handleChangeTheme}
    name="dark"
    color="default"
    inputProps={{ "aria-label": "checkbox with default color" }}
  />
  );
  return(
    <>
    <Navbar />
    <Main />
    {/* <div className="dark-mode-switch">
    <FormControlLabel
      control={toggleTheme}
    />
    </div> */}
    </>
  )  
}

export default App;
