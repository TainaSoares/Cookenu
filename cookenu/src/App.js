import { ThemeProvider } from "@material-ui/styles";
import { theme } from "./constants/theme"
import React, { useState } from "react"
import Router from "./routes/Router"
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
  const token = localStorage.getItem("token")
  const [rightButtonText, setRightButtonText] = useState(token ? "Logout" : "Login")
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>
        <Router setRightButtonText={setRightButtonText}/>
      </BrowserRouter>

    </ThemeProvider>
  );
}

export default App;
