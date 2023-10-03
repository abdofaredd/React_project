import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './../Navbar/Navbar';
import Footer from './../Footer/Footer';
import LanguageContext from '../Context/language'
import ThemeContext from '../Context/ThemeContext'

export default function Layout() {


  const {DarkMode, toggleDarkMode} = useContext(ThemeContext);
  const { language, toggleLanguage } = useContext(LanguageContext);
  return<>
    <Navbar  /> 

    <div className={`${DarkMode ? " dark-mode" : " light-mode"} ${language === "ar" ? "rtl" : "ltr"} container `}  >
    <Outlet ></Outlet>
    </div>
    <Footer/>
  </>
}
