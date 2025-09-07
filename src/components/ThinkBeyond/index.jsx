import React from 'react';
import styled from 'styled-components';
import { coin2, coin3, copyright, wavy_line } from '../../imports';
import './index.css';

const SectionWrapper = styled.div`
  background-color: var(--black);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 4rem 1rem;
  padding-bottom: 15rem;
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 15rem;
  position: relative;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    padding: 6rem 2rem;
  }
`;

const ContentCard = styled.div`
  background-color: var(--purple);
  border-radius: 20px;
  padding: 2rem;
  position: relative;
  max-width: 1000px;
  width: 90%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  display: flex;
  margin-top: -20vw;
  flex-direction: column;
  align-items: center;
  text-align: center;
  z-index: 100;

  @media (min-width: 768px) {
    justify-content: space-between;
    align-items: center;
    padding: 3rem 4rem;
    margin-top: -10vw;
  }
`;

const ContentDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 7rem;
  padding: 2rem;
  font-family: sans-serif;
`;


const CardTitle = styled.h2`
  color: white;
  font-size: 5rem;
  font-weight: 600;
  margin-block: 2.5rem;
  line-height: 1.2;
  text-align: center;
  z-index: 10;
  
  @media (max-width: 768px) {
    font-size: 4.7rem;
    margin-bottom: 
  }
`;


const WaitlistButton = styled.a`
  background-color: white;
  color: var(--black);
  padding: 1.5rem 1.5rem;
  border-radius: 10px;
  text-decoration: none;
  cursor: pointer;
  z-index: 500;
  font-weight: 400;
  font-size: 1.95rem;
  line-height: 1;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }
`;


const BackgroundShapes = styled.img`
  position: absolute;
`;


const ThinkBeyondSection = () => {
  return (
    <SectionWrapper>
      <ContentCard>
        <BackgroundShapes className='think-coin-shape-1' src={coin3} alt="Background shapes" />
        <BackgroundShapes className='think-coin-shape-2' src={coin2} alt="Background shapes" />
        <BackgroundShapes className='wavy-line wavy-line-1 wavy-left' src={wavy_line} alt="Background shapes" />
        <BackgroundShapes className='wavy-line wavy-line-2 wavy-left' src={wavy_line} alt="Background shapes" />
        <BackgroundShapes className='wavy-line wavy-line-3 wavy-left' src={wavy_line} alt="Background shapes" />
        <BackgroundShapes className='wavy-line wavy-line-4  wavy-right' src={wavy_line} alt="Background shapes" />
        <BackgroundShapes className='wavy-line wavy-line-5 wavy-right' src={wavy_line} alt="Background shapes" />
        <BackgroundShapes className='wavy-line wavy-line-6 wavy-right' src={wavy_line} alt="Background shapes" />
        <ContentDetails>
          <CardTitle>Think Crypto. <br /> Think Beyond. </CardTitle>
          <WaitlistButton href="#waitlist">
            Join the waitlist
          </WaitlistButton>
        </ContentDetails>
      </ContentCard>
      <div className="copyright">
        <img className='copyright-img' src={copyright} alt="copyright" />
        <span className='copyright-text'>
          Beyondafrica {new Date().getFullYear()}, All Right Reserved.
        </span>
      </div>
    </SectionWrapper>
  );
};

export default ThinkBeyondSection;