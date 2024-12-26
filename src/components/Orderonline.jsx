import React from 'react'
import './Orderonline.css'
import Header from './Header'
import Footer from './Footer'
import MenuItems from './MenuItems'


function Orderonline({addItemToCart,NotifySucces, cartItems}) {
    return (
        <div className="order">
            <Header cartItems={cartItems}/>
            <h1 className='order-title'>Menu</h1>
            <MenuItems itemsPerPage={6} NotifySucces={NotifySucces} addItemToCart={addItemToCart} />
            <Footer />
        </div>
    )
}

export default Orderonline