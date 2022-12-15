import React, { useContext } from 'react';
import { DarkModeContext, DarkModeProvider } from '../context/DarkModeContext';

const AppTheme = (props) => {
    return (
        <DarkModeProvider>
            <Header />
            <Main />
            <Footer />
        </DarkModeProvider>
    )
}
const Header = () => {
    return (
        <header className='header'>Header</header>
    )
}
const Main = () => {
    return (
        <>
            <header className='main'>Main</header>
            <Products />
        </>
    )
}
const Products = () => {
    return (
        <>
            products
            <ProductsDetail />
        </>
    )
}
const ProductsDetail = () => {
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
    console.log(darkMode, toggleDarkMode.toString())
    return (
        <>
            productDetail
            <p>DarkMode {darkMode.toString()}</p>
            <button onClick={() => toggleDarkMode()}>Toggle</button>
        </>

    )
}
const Footer = () => {
    return (
        <header className='footer'>Footer</header>
    )
}

export default AppTheme;