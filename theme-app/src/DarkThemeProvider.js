import React from "react";
import { UseSelector, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";


const DarkThemeEnabled = ({ children}) =>{
    const darkThemeEnabled = useSelector((state)=> state.preferences.darkThemeEnabled);
    return(
        <ThemeProvider theme={{theme:darkThemeEnabled ? "dark" : "light"}}>
            {children}            
        </ThemeProvider>
    )
};
export default DarkThemeEnabled;