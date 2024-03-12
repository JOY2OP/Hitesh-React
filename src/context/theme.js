import { useContext,createContext } from "react";

// Step1: Creating CONTEXT
export const ThemeContext = createContext({
    themeMode: 'light',
    lightTheme: ()=>{},
    darkTheme: ()=>{},
})

//Step2: Providing the CONTEXT
export const ThemeProvider = ThemeContext.Provider;

//Step3: Making default hook- useTheme()-   
//So the components knows the existence of the CONTEXT
export default function useTheme(){
    return useContext(ThemeContext);
}
