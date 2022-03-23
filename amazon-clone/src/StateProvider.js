import React, {createContext, useContext, useReducer} from "react";

// Prepares the data layer
export const StateContext = createContext();

// wrap our app and providing the data layer to every compnent in the app
export const StateProvider = ({reducer, initialState,children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// pull information from the data layer
export const useStatevalue = () => useContext(StateContext);