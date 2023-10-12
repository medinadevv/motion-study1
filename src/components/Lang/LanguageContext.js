import React, {createContext, useContext, useState} from "react";

const LanguageContext = createContext();

export function LanguageProvider({children}) {
    const [language, setLanguage] = useState("en"); // Изначально выбран английский язык
    const changeLanguage = (newLanguage) => {
        setLanguage(newLanguage);
    };
    return (
        <LanguageContext.Provider value={{language, changeLanguage}}>            {children}
        </LanguageContext.Provider>);
}

export function useLanguage() {
    return useContext(LanguageContext);
}