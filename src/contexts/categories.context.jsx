import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";


export const CategoriesContext = createContext({
    categoriesMap: {},
});

export const CategoriesProvider = ({children}) => {

    const [categoriesMap, setCategoriesMap] = useState({});

    useEffect(() => {
        //getCategoriesAndDocuments is an async function, you must wrap it in an async function within useEffect
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            setCategoriesMap(categoryMap);
        }

        getCategoriesMap();
    }, []);

    const value = {categoriesMap};

    return (
        <CategoriesContext.Provider value={value}> {children} </CategoriesContext.Provider>
    )
}