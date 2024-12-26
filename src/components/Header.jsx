import React, { useState } from 'react';
import '../components/Header.css';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';

function Header({cartItems}) {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation(); // Hook to get the current route
    // const cartItemsnum = 3;

    const toggleOpen = () => {
        setMenuOpen(true)
    }

    const toggleClose = () => {
        setMenuOpen(false)
    }

    // const toggleMenu = () => {
    //     setMenuOpen(!menuOpen);
    // };

    // console.log(cartItems);
    // console.log(cartItems.length);
    
    

    return (
        <div className='header'>
            <Link to='/' className="header-logo">
                <div className="header-logo-circle">
                    <p>D</p>
                </div>
                <p>Delizi<span className='header-logo-span'>oso</span></p>
            </Link>

            <div className={`header-links `}>
                <Link 
                    to='/' 
                    // onClick={() => setMenuOpen(false)} 
                    className={location.pathname === '/' ? 'active-link' : ''}
                >
                    Home
                </Link>
                <Link 
                    to='/About' 
                    // onClick={() => setMenuOpen(false)} 
                    className={location.pathname === '/About' ? 'active-link' : ''}
                >
                    About us
                </Link>
                <Link 
                    to='/OrderOnline' 
                    // onClick={() => setMenuOpen(false)} 
                    className={location.pathname === '/OrderOnline' ? 'active-link' : ''}
                >
                    Order online
                </Link>
                <Link 
                    to='/Reservation' 
                    // onClick={() => setMenuOpen(false)} 
                    className={location.pathname === '/Reservation' ? 'active-link' : ''}
                >
                    Reservation
                </Link>
                <Link 
                    to='/Contact' 
                    // onClick={() => setMenuOpen(false)} 
                    className={location.pathname === '/Contact' ? 'active-link' : ''}
                >
                    Contact us
                </Link>
            </div>

            <div className="header-counter-button">
                <Link to='/Cart'>
                    <div className="header-counter">
                        <MdOutlineShoppingCart />
                        <div className="header-counter-num">
                            {cartItems.length === 0 ? (<small>0</small>) : (<small>{cartItems.length}</small>)}
                        </div>
                    </div>
                </Link>

                <Link to='/Login'>
                    <button className='header-counter-button-button' >Login</button>
                </Link>

                <button className="setting-btn" onClick={() => toggleOpen()}>
                    <span className="bar bar1"></span>
                    <span className="bar bar2"></span>
                    <span className="bar bar1"></span>
                </button>
            </div>

            <div className={`sidebar ${menuOpen ? 'open' : ''}`}>

                    <button
                    onClick={() => toggleClose()}
                    className="sidebar-close-btn bg-white text-center w-48 rounded-2xl h-14 relative text-black text-xl font-semibold group"
                    type="button"
                    >
                    <div
                        className="bg-customOrange rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500"
                    >
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1024 1024"
                        height="205px"
                        width="25px"
                        >
                        <path
                            d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                            fill="#FFF"
                        ></path>
                        <path
                            d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                            fill="#FFF"
                        ></path>
                        </svg>
                    </div>
                    <p className="translate-x-2 text-customOrange">Go Back</p>
                    </button>
   

                <div className={`sidebar-link`}>
                    <Link 
                        to='/' 
                        // onClick={() => setMenuOpen(false)} 
                        className={location.pathname === '/' ? 'active-link' : ''}
                    >
                        Home
                    </Link>
                    <Link 
                        to='/About' 
                        // onClick={() => setMenuOpen(false)} 
                        className={location.pathname === '/About' ? 'active-link' : ''}
                    >
                        About us
                    </Link>
                    <Link 
                        to='/OrderOnline' 
                        // onClick={() => setMenuOpen(false)} 
                        className={location.pathname === '/OrderOnline' ? 'active-link' : ''}
                    >
                        Order online
                    </Link>
                    <Link 
                        to='/Reservation' 
                        // onClick={() => setMenuOpen(false)} 
                        className={location.pathname === '/Reservation' ? 'active-link' : ''}
                    >
                        Reservation
                    </Link>
                    <Link 
                        to='/Contact' 
                        // onClick={() => setMenuOpen(false)} 
                        className={location.pathname === '/Contact' ? 'active-link' : ''}
                    >
                        Contact us
                    </Link>
                </div>
            </div>
            
        </div>
    );
}

export default Header;
