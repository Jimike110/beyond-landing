import React from 'react';
import Header from '../../components/Header';
import Waitlist from '../../components/Waitlist';
import { coin1, coin2, coin3, coin4, screenshot } from '../../imports';
import BeyondFeatures from '../../components/Feature';
import WithinReachSection from '../../components/WithinReach';
import MarqueeRibbonsSection from '../../components/MovingRibbons';
import ThinkBeyondSection from '../../components/ThinkBeyond';


const Home = () => {
    return (
        <>
            <div id='home' className="hero-section">
                <div className="container">
                    <Header></Header>
                    <div className="hero-content">
                        <h1 className="hero-title">Beyond finance. Beyond barriers.</h1>
                        <p className="hero-subtitle">
                            Beyond is your gateway to a fully decentralized financial world. Buy, sell, swap, and trade crypto without giving up control.
                        </p>
                        <button className="waitlist-btn"><a href='#waitlist'>Join the waitlist</a></button>

                        <div className="hero-image-container">
                            <div
                                className="hero-image"
                                style={{ backgroundImage: `url(${screenshot})` }}
                            ></div>
                            <img src={coin1} alt="floating coin" className="floating-coin coin-1" />
                            <img src={coin2} alt="floating coin" className="floating-coin coin-2" />
                            <img src={coin3} alt="floating coin" className="floating-coin coin-3" />
                            <img src={coin4} alt="floating coin" className="floating-coin coin-4" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <Waitlist></Waitlist>
                <BeyondFeatures></BeyondFeatures>
            </div>
            <WithinReachSection />
            <MarqueeRibbonsSection />
            <section className='why-beyond-sect container'>
                <h3 className='why-beyond-title'>
                    Why Beyond?
                </h3>
                <p className='why-beyond-desc'>Built for speed, safety and freedom. Beyond eliminates the friction of traditional P2P
                    transactions whether you’re converting crypto to cash swapping between coins, or
                    trading futures, every transaction is instant and safe
                </p>
            </section>
            <ThinkBeyondSection />
        </>
    )
}

export default Home