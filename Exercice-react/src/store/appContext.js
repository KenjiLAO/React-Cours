import React, { createContext, useReducer } from "react";

export const myAppContext = createContext({
    state: { test: 'initial value' },
    dispatch: (action) => { }
})


export const MyAppContextProvider = ({ children }) => {

    const myReducer = (state, action) => {
        switch (action.type) {
            case 'MODFIY_TEST_STRING':
                console.log('je suis entré dans MODFIY_TEST_STRING')
                return { ...state, test: action.payload }
            default:
                console.log('je suis pas entré dans un case')
                return state
        }
    }

    const [state, dispatch] = useReducer(myReducer, { test: 'myString' })

    const myHandler = () => {
        dispatch({ type: 'MODIFY_TEST_STRING', payload: 'nouvelle valeur' })
        //dispatch() fait référence au paramètre de useReducer()
    }

    return (
        <myAppContext.Provider value={{
            state: state,
            dispatch: dispatch,
        }}>
            {children}
        </myAppContext.Provider>
    )
}
