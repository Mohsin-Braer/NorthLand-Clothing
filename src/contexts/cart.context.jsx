import { createContext, useState, useEffect } from "react";

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
    const [isOpen, setIsOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setCartCount(newCartCount);
    }, [cartItems]);

    useEffect(() => {
        const newTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);
        setCartTotal(newTotal);
    }, [cartItems]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove));
    }

    const clearItemFromCart = (productToClear) => {
        setCartItems(clearCartItem(cartItems, productToClear));
    }

    const value = {isOpen, setIsOpen, addItemToCart, removeItemFromCart, clearItemFromCart, cartItems, cartCount, cartTotal};

    return  (<CartContext.Provider value={value}>{children}</CartContext.Provider>);
}