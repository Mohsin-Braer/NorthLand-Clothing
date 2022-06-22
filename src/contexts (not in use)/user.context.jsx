import { createContext, useEffect, useReducer } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";
import { createAction } from "../utils/reducer/reducer.utils";

//Actual value you want to store and access globally
export const UserContext = createContext({
    setCurrentUser: () => null,
    currentUser: null,
  });
  
export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
}

  const userReducer = (state, action) => { //state is used in order to pass in all unmodified values to new obj returned
    const {type, payload} = action;


    switch(type){
      case USER_ACTION_TYPES.SET_CURRENT_USER:
        return {
          ...state,
          currentUser: payload
        }
      default: 
        throw new Error(`Unhandled type ${type} in userReducer`)
    }
  }

  const INITIAL_STATE = {
    currentUser: null
  }
  
  export const UserProvider = ({ children }) => {
    //const [currentUser, setCurrentUser] = useState(null);
    const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);

    const {currentUser} = state;
    const setCurrentUser = (user) => {
      dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER,INITIAL_STATE));
    }


    const value = { currentUser, setCurrentUser };

  
    useEffect(() => {
      const unsubscribe = onAuthStateChangedListener((user) => {
        if (user) {
          createUserDocumentFromAuth(user);
        }
        setCurrentUser(user);
      });
  
      return unsubscribe;
    }, []);
  
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
  };

  /**
   * 
   * Reducers
   * 
   * const userReducer = (state, action) => {
   *    return {
   *      currentUser: {}
   *    }
   * }
   * 
   */