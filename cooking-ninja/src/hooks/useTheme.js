import {useContext } from 'react'  //To use any conext using useConext
import { ThemeContext } from '../contexts/Themecontext'

export const useTheme = () => {
    const context = useContext(ThemeContext)
    // If  we try to use the context outside of the component wwrapped in themeProvider 
    if(context === undefined ){
        throw new Error("use theme must be used in a themeProvider")
    }
    
    return context
}