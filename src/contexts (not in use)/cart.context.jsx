import { createContext, useState, useEffect, useReducer } from "react";

import { createAction } from "../utils/reducer/reducer.utils";

export const CartContext = createContext({
    isOpen: false,
    setIsOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
    cartCount: 0,
    cartTotal: 0
})

const INITIAL_STATE = {
    cartItems: [],
    isOpen: false,
    cartCount: 0,
    cartTotal: 0

};

const CART_ACTION_TYPES = {
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    SET_IS_CART_OPEN: 'SET_IS_CART_OPEN'
}


const cartReducer = (state, action) => {
    const {type, payload} = action;

    switch(type){
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return{
                ...state,
                ...payload,
            }
        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return{
                ...state,
                isOpen: payload,
            }
        default:
            throw new Error(`Unhandled type of ${type} in cartReducer`)
    }
}

const addCartItem = (cartItems, productToAdd) => {

    //If product is already in the list, just increment quantity
    const existingCartItem = cartItems.find((cartItem) => cartItem.id == productToAdd.id);

    //if cartItem exist, create a newly copied array with the changed quantity else just keep cartItem
    if(existingCartItem){
     return cartItems.map((cartItem) => cartItem.id == productToAdd.id ? {
         ...cartItem, quantity: cartItem.quantity + 1} : cartItem
         )}

    //If product not found, create new array with all existing elements plus new product to add
    return [...cartItems,{...productToAdd, quantity: 1}] 
}

const removeCartItem = (cartItems, productToRemove) => {

    const existingCartItem = cartItems.find((cartItem) => cartItem.id == productToRemove.id);

    //If quantity equal to 1
    if(existingCartItem.quantity == 1){
        return cartItems.filter(cartItem => cartItem.id != productToRemove.id);
    }

    //If quantity greater than 1
    return cartItems.map((cartItem) => cartItem.id == productToRemove.id ? {
        ...cartItem, quantity: cartItem.quantity - 1} : cartItem
        )



}
const clearCartItem = (cartItems, productToClear) => {
    
    return cartItems.filter(cartItem => cartItem.id != productToClear.id);

}

export const CartProvider = ({children}) => {
    // const [isOpen, setIsOpen] = useState(false);
    // const [cartItems, setCartItems] = useState([]);
    // const [cartCount, setCartCount] = useState(0);
    // const [cartTotal, setCartTotal] = useState(0);

    // useEffect(() => {
    //     const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
    //     setCartCount(newCartCount);
    // }, [cartItems]);

    // useEffect(() => {
    //     const newTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);
    //     setCartTotal(newTotal);
    // }, [cartItems]);

    const [{isOpen, cartItems, cartCount, cartTotal}, dispatch] = useReducer(cartReducer, INITIAL_STATE);

    const updateCartItemsReducer = (newCartItems) => {
        const newCartCount = newCartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
    
        const newTotal = newCartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);
    
        dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {cartItems: newCartItems, cartTotal: newTotal, cartCount: newCartCount }))
    }

    const addItemToCart = (productToAdd) => {
        const newCartItems = addCartItem(cartItems, productToAdd);
        updateCartItemsReducer(newCartItems);
    }

    const removeItemFromCart = (productToRemove) => {
        const newCartItems = removeCartItem(cartItems, productToRemove);
        updateCartItemsReducer(newCartItems);
    }

    const clearItemFromCart = (productToClear) => {
        const newCartItems = clearCartItem(cartItems, productToClear);
        updateCartItemsReducer(newCartItems);
    }

    const setIsOpen = (bool) => {
       dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN,bool)); 
    }

    const value = {isOpen, setIsOpen, addItemToCart, removeItemFromCart, clearItemFromCart, cartItems, cartCount, cartTotal};

    return  (<CartContext.Provider value={value}>{children}</CartContext.Provider>);
}