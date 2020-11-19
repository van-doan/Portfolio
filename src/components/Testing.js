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

<FormControlLabel
control={toggleTheme}
/>