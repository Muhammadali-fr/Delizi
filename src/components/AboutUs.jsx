import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AboutOur from '../assets/about-our.png'
import AbutSed from '../assets/aboutSed.png'
import './AboutUs.css'
import AboutOwnerImg from '../assets/AboutOwner.png'


function AboutUs({cartItems}) {
    return (
        <div className='wrap-about'>
            <Header cartItems={cartItems}/>
            <div className="about">

                <div className="about-restautant">
                    <div className="about-restautant-left">
                        <img src={AboutOur} alt="AboutOur" />
                    </div>
                    <div className="about-restautant-right">
                        <h1 className='about-restautant-right-h1'><span>Our</span> restautant</h1>
                        <img className='about-restautant-right-img' src={AboutOur} alt="Abputour" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
                    </div>
                </div>

                <div className="about-sed">
                    <div className="about-sed-left aboutSedH">
                        <img src={AbutSed} alt="AbutSed" />
                    </div>

                    <div className="about-sed-left">
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
                    </div>

                    <div className="about-sed-left aboutSedNH">
                        <img src={AbutSed} alt="AbutSed" />
                    </div>
                </div>

                <div className="about-own">
    <div className="about-own-left">
        <img src={AboutOwnerImg} alt="About Owner" />
    </div>
    <div className="about-own-right">
        <h1 className="about-title">
            <span className="highlight">Owner</span> & Executive Chef
        </h1>
        <h3 className="about-name">Ismail Marzuki</h3>
        <p className="about-description">
            <span className="quote">“</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <span className="quote">”</span>
        </p>
    </div>
</div>

            </div>
            <Footer />
        </div>
    )
}

export default AboutUs