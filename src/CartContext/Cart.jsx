import React, { useReducer, useContext, createContext } from "react";

//state of cart
const CartStateContext = createContext();
//when fire the action
const CartDispatchContext = createContext();

const reducer = (state, action) => {

    switch (action.type) {
        case "ADD":
            return [...state, action.item];
        case "REMOVE":
            const newArr = [...state];
            newArr.splice(action.index, 1);
            return newArr;
        case "UPDATE":
            return [...state];
        default:
            throw new Error(`No action ${action.type}`);
    }
};

export const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, []); //default value []

    return (
        <CartDispatchContext.Provider value={dispatch}>
            <CartStateContext.Provider value={state}>
                {children}
            </CartStateContext.Provider>
        </CartDispatchContext.Provider>
    );
};


export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);