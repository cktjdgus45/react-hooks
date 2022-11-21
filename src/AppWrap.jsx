import React from 'react';

const Navbar = ({ children }) => {
    return (
        <header style={{ backgroundColor: 'yellow' }}>
            {children}
        </header>
    )
}
const Avatar = ({ image, name, size }) => {
    return (
        <div>
            <img src={image} alt={`${name}`} width={size} height={size} style={{ borderRadius: '50%' }}></img>
        </div>
    )
}

const AppWrap = () => {
    return (
        <div>
            <Navbar>
                <Avatar image={'https://images.unsplash.com/photo-1527980965255-d3b416303d12'} name="bob" size={200} />
                <p>안녕하세요!</p>
            </Navbar>
            <Navbar>
                <p>안녕하세요!</p>
            </Navbar>
        </div>
    )
}

export default AppWrap;