import React from "react";
import styled, {ThemeProvider} from "styled-components";
import theme from "styled-theming"
import { Provider as ReduxProvider } from "react-redux";
import DarkThemeProvider from "./DarkThemeProvider";
import DarkThemeToggle from "./DarkThemeToggle";
import store from "./redux/store";
import './App.css'


export const theme1 = theme("theme",{
  light:"#fff",
  dark:"#2d2d2d"
})
export const theme2 = theme("theme",{
  light:"#000",
  dark:"#fff"
})
const Container = styled.div`
display:flex;
backfround-color:${theme1}
flex-direction:column;
width:100vw;
height:100vh;
align-items:center;
justify-content:center;
font-family:sans-serif;
`
const SwitchTheme = styled.div`
display:flex;
height:75px;
align-items:center;
justify-content:space-between;
padding:0 50px;
`
const App = () =>{
  return(
    <React.Fragment>
      <ReduxProvider store={store}>
      <DarkThemeProvider>
      <SwitchTheme>
        <h1>Theme App</h1>
        <p>
          <DarkThemeToggle />
        </p>
      </SwitchTheme>
      <Container>
        <h2>Welcome!</h2>
        <h3>Full Stack Web Development</h3>
      </Container>
      </DarkThemeProvider>
      </ReduxProvider>
    </React.Fragment>
  )
}
export default App;