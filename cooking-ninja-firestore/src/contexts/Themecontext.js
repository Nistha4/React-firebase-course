// Contexts are used as sometimes a data is used by many components and so that data is passed through a parent to child over and over which becomes cumbersom so context is used.. which acts as a global value for that tree of react compaonents.

import { createContext, useReducer } from 'react'

export const ThemeContext = createContext()

const themeReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_COLOR':
            return {...state, color:action.payload }
            
        case 'CHANGE_MODE':
            return { ...state, mode: action.payload}
        default:
            return state;
    }
}

export function ThemeProvider({children}){
    const [state, dispatch] = useReducer(themeReducer, {
        color: '#58249c',
        mode: 'dark'
    })
    
    const changeColor =  (color) => {
        dispatch({ type: 'CHANGE_COLOR' , payload: color})
    }

    const changeMode = (mode) => {
        dispatch({ type: 'CHANGE_MODE', payload:mode })
    }

    return(
        <ThemeContext.Provider value={{ ...state, changeColor, changeMode}}>
            {children}
        </ThemeContext.Provider>
        )
    

}
