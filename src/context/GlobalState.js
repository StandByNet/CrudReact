import React, {createContext, useReducer} from "react";
import AppReducer from './AppReducer';

//Initial State
const initialState = {
    users: [
        {id:1, name: 'utilisateur1'},
        {id:2, name: 'utilisateur2'},
        {id:3, name: 'utilisateur3'},
    ]
};

//creat context
export const GlobalContext = createContext(initialState);

//provider Component
export const GlobalProvider =({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

return(
    <GlobalContext.Provider value = {{
        users:state.users
    }}>
    {children}    
    </GlobalContext.Provider>
)
}