import React from 'react';
import Header from '../../components/Header';
import Waitlist from '../../components/Waitlist';
import { avatar_pink_guy, avatar_purple_lady, avatar_yellow_lady, coin3, coin4, header_mockup } from '../../imports';
import BeyondFeatures from '../../components/Feature';
import WithinReachSection from '../../components/WithinReach';
import MarqueeRibbonsSection from '../../components/MovingRibbons';
import ThinkBeyondSection from '../../components/ThinkBeyond';
import styled from 'styled-components';


const Home = () => {
    const SVGBackground = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  max-width: 1200px; 
  max-height: 1200px;
`;

    const DashedCircleSVG = styled.circle`
  fill: none;
  stroke: rgba(255, 255, 255, 0.5);
  stroke-width: 1px;
  stroke-dasharray: 20, 10;
  /* You can add animation here if you want them to subtly move or fade */
`;

    const centerX = 500;
    const centerY = 500;


    return (
        <>
            <div id='home' className="hero-section">
                <SVGBackground viewBox="0 0 1000 1000">
                    <DashedCircleSVG cx={centerX} cy={centerY} r="350" />
                    <DashedCircleSVG cx={centerX} cy={centerY} r="450" />
                    <DashedCircleSVG cx={centerX} cy={centerY} r="550" />
                    <DashedCircleSVG cx={centerX} cy={centerY} r="650" />
                </SVGBackground>
                <div className="container">
                    <Header></Header>
                    <div className="hero-content">
                        <h1 className="hero-title">Beyond finance. Beyond barriers.</h1>
                        <p className="hero-subtitle">
                            Beyond is the most intuitive way to buy, sell, deposit, withdraw and trade cryptocurrencies. Built for africa, powered by trust.                        </p>
                        <button className="waitlist-btn"><a href='#waitlist'>Join the waitlist</a></button>

                        <div className="hero-image-container">
                            <div
                                className="hero-image"
                                style={{ backgroundImage: `url(${header_mockup})` }}
                            ></div>
                            <img src={avatar_purple_lady} alt="floating avatar" className="floating-avatar avatar-1" />
                            <img src={avatar_pink_guy} alt="floating avatar" className="floating-avatar avatar-2" />
                            <img src={avatar_yellow_lady} alt="floating avatar" className="floating-avatar avatar-3" />
                            <img src={avatar_purple_lady} alt="floating avatar" className="floating-avatar avatar-4" />
                            <img src={coin3} alt="floating coin" className="floating-coin coin-3" />
                            <img src={coin4} alt="floating coin" className="floating-coin coin-4" />
                        </div>
                    </div>
                </div>
            </div >
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
                <p className='why-beyond-desc'>We are on a mission to make crypto safe and accessible to everyone for too long crypto users have faced scams, delays and unreliable platforms. 
                    Beyond changes that we believe crypto will power the next generation of finance.
                </p>
            </section>
            <ThinkBeyondSection />
        </>
    )
}

export default Home