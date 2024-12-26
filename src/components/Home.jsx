import React, { useState } from 'react';
import './Home.css';
import Header from '../components/Header'
import Footer from '../components/Footer'
import HomeItalian from '../assets/homeItalian.png';
import HomeWelcome from '../assets/homeWelcome.png';
import MenuItems from '../components/MenuItems';
import HomeResRec from '../assets/HomeResRec.png'
import HomeReserveS1 from '../assets/HomeReserveS1.png'
import HomeReserveS2 from '../assets/HomeReserveS2.png'

function Home({addItemToCart, NotifySucces, cartItems}) {

    const chefs = [
        { name: 'Betran Komar', level: 'Head chef', img: require('../assets/homeChefBetran.png') },
        { name: 'Ferry Sauwi', level: 'Chef', img: require('../assets/homeChefFerry.png') },
        { name: 'Iswan Dracho', level: 'Chef', img: require('../assets/homeChefIswan.png') },
        { name: 'Iswan Dracho', level: 'Chef', img: require('../assets/homeChefIswan.png') },

    ];

    const [showAll, setShowAll] = useState(false);

    const handleViewAll = () => {
        setShowAll(true);
    };

    return (
        <div className='home'>
            <Header cartItems={cartItems} />

            <div className="home-hero-italian">
                <div className="home-hero-italian-left">
                    <button className='home-hero-italian-left-restauran-button'>Restaurant</button>
                    <h1 className='home-hero-italian-left-h1'>Italian Cuisine</h1>
                    <p className='home-hero-italian-left-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales senectus dictum arcu sit tristique donec eget.</p>
                    <div className="home-hero-italian-left-wrap-btn">
                        <button aria-label="Order Now">Order Now</button>
                        <button aria-label="Make a Reservation" className='home-hero-italian-left-wrap-btn-sec'>Reservation</button>
                    </div>
                </div>

                <div className="home-hero-italian-right">
                    <img src={HomeItalian} alt="Italian Cuisine" />
                </div>

            </div>

            <div className="home-welcome-wrap">
                <div className="home-welcome">
                    <div className="home-welcome-left">
                        <img className='home-welcome-left-img' src={HomeWelcome} alt="Welcome" />
                    </div>

                    <div className="home-welcome-right">
                        <h1 className='home-welcome-right-h1'>Welcome to <span>delizioso</span></h1>
                        <p className='home-welcome-right-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam</p>
                        <button className='home-welcome-right-button'>See our menu</button>
                    </div>
                </div>
            </div>

            <div className="wrap-menu-items">
                <h1 className='hero-our-h1'>Our popular menu</h1>
                <MenuItems itemsPerPage={6} addItemToCart={addItemToCart} NotifySucces={NotifySucces}/>

            </div>

            <div className="wrap-home-reserve">
                <div className="home-reserve">
                    <div className="home-reserve-left">
                        <div className="home-reserve-small-rec1">
                            <img src={HomeReserveS1} alt="HomeReserveS1" />
                        </div>
                        <div className="home-reserve-big-rec">
                            <div className="home-reserve-small-rec">
                                <img src={HomeResRec} alt="HomeResRec" />
                            </div>
                        </div>
                        <div className="home-reserve-small-rec2">
                            <img src={HomeReserveS2} alt="HomeReserveS2" />
                        </div>

                    </div>
                    <div className="home-reserve-right">
                        <h1 className='home-welcome-right-h1'>Let's reserve <span>a table</span></h1>
                        <p className='home-welcome-right-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam</p>
                        <button className='home-welcome-right-button'>Reservation</button>
                    </div>
                </div>
            </div>

            <div className="home-chef">
                <h1 className='home-chef-h1'>Our greatest chef</h1>
                <div className='home-chef-wrap-chefs'>
                    {chefs.slice(0, showAll ? chefs.length : 3).map((chef, index) => (
                        <div className='home-chef-wrap-chef' key={index}>
                            <img src={chef.img} alt={chef.name} style={{ width: '200px', height: 'auto', borderRadius: '10px' }} />
                            <h3>{chef.name}</h3>
                            <p>{chef.level}</p>
                        </div>
                    ))}
                </div>
                {!showAll && (
                    <button
                        onClick={handleViewAll}
                        className='view-all-button'
                    >
                        View all
                    </button>
                )}
            </div>


            {/* <div className="home-customers">
                <h1>Our customers say</h1>
            </div> */}

            <div className="wrap-home-open">
                <div className="home-open">
                    <div className="home-open-words">
                        <h1>we are open from</h1>
                        <div className="home-open-day">
                            <h3>Monday-Sunday</h3>
                            <p>Launch : Mon-Sun : 11:00am-02:00pm</p>
                            <p>Dinner : Sunday : 04:00pm-08:00pm</p>
                            <p>Late : 04:00pm-09:00pm</p>
                        </div>
                        <div className="home-open-btns">
                            <button className="home-open-btn home-open-btn-orange">
                                <span>Order now</span>
                            </button>
                            <button className="home-open-btn home-open-btn-white">
                                <span>Reservation</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            <Footer />

        </div>
    );
}

export default Home;
