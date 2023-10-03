import React, { createContext, useState } from "react";

const LanguageContext = createContext();

export const LanguageProvider = (props) => {
  const [language, setLanguage] = useState("en"); 

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "ar" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {props.children}
    </LanguageContext.Provider>
  );
};
export default LanguageContext ;