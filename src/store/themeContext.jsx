import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
const isDarkInitially =()=> localStorage.theme === "dark"; 
const ThemeContext = createContext({
    isDark : false,
    themeToggler: ()=>{},
});
export const ThemeContextProvider = (props) =>{

    const [isDark,setIsDark] = useState(isDarkInitially);
      
     const themeToggler =()=>{
        setIsDark((val)=> !val);
        console.log("dtata",isDark);
     };
      useEffect(()=>{
        if(isDark) localStorage.theme ="dark";
        else localStorage.theme = "light"; 
      },[isDark]);
     return(
        <ThemeContext.Provider
         value={{
            isDark,
            themeToggler :themeToggler,
         }}
        >
      {props.children}

        </ThemeContext.Provider>
     )

};

export default ThemeContext;