import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";
import {ThemeContextProvider} from "./../store/themeContext"
import ThemeContext from './../store/themeContext';
import { useContext } from 'react';

const Layout=()=>{
    const themeCtx = useContext(ThemeContext);
    const darkClass = themeCtx.isDark ? "dark" : "";
    return(
 
            <div className={`app${darkClass}`}>
                <Navigation/>
                <Outlet/>
                <Footer/>
            </div>
    )
}

export default Layout;
