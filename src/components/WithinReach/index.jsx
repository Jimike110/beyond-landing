import React from 'react';
import styled from 'styled-components';
import { bordered_rect, screenshot } from '../../imports';
import './index.css';

const SectionWrapper = styled.div`
  background-color: var(--purple);
  padding: 4rem 1rem;
  display: flex;
//   height: 600px;
  margin-top: 15rem;
  position: relative;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    padding: 6rem 2rem;
  }
`;

const ContentCard = styled.div`
  background-color: #3EDCB1;
  border-radius: 20px;
  padding: 2rem;
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
 display: grid;
 justify-content: center;
 align-items: center;
  gap: 7rem;
  padding: 2rem;
  font-family: sans-serif;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0;
  }
`

const TextContent = styled.div`
display: flex;
flex-direction: column;
  @media (min-width: 768px) {
    padding-left: 2rem;
  }
`;

const CardTitle = styled.h2`
  color: white;
  font-size: 3.5rem;
  font-weight: 600;
  margin-block: 2.5rem;
  line-height: 1.2;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 2.7rem;
    margin-bottom: 
  }

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const CardParagraph = styled.p`
  color: white;
  font-size: 2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 500px;
  text-align: left;
  
  @media (min-width: 768px) {
    font-size: 2.2rem;
  }
`;

const WaitlistButton = styled.a`
  background-color: white;
  color: var(--black);
  padding: 1.3rem 1.5rem;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 400;
  font-size: 1.75rem;
  max-width: 200px;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const ButtonIcon = styled.svg`
  margin-left: 0.5rem;
  font-size: 1.2rem;
`;

const PhoneImageWrapper = styled.div`
 position: relative;
 background-color: var(--purple);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 400px;
  
  @media (min-width: 768px) {
    margin-bottom: 0;
    max-height: 400px;
    width: 400px;
    margin-right: 2rem;
    flex-shrink: 0;
  }
`;

const PhoneImage = styled.div`
  width: 100%;
  max-width: 80%;
  height: 360px;
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  border-inline: 3px solid var(--black);
  border-top: 3px solid var(--black);
  border-radius: 15px 15px 0 0;
  margin-top: 5rem;
  z-index: 2;

  @media (min-width: 768px) {
    max-height: 350px;
    width: 400px;
  }
`;

const BackgroundShapes = styled.img`
  position: absolute;
  height: 55px;
  z-index: 1;
  opacity: 0.5;
  color: var(--white);
`;


const BeyondSection = () => {
    return (
        <SectionWrapper>
            <ContentCard>
                <CardTitle>Beyond will always be within reach</CardTitle>
                <ContentDetails>
                    <PhoneImageWrapper>
                        <BackgroundShapes className='bg-shape-1' src={bordered_rect} alt="Background shapes" />
                        <BackgroundShapes className='bg-shape-2' src={bordered_rect} alt="Background shapes" />
                        <BackgroundShapes className='bg-shape-3' src={bordered_rect} alt="Background shapes" />
                        <BackgroundShapes className='bg-shape-4' src={bordered_rect} alt="Background shapes" />
                        <BackgroundShapes className='bg-shape-5' src={bordered_rect} alt="Background shapes" />
                        <BackgroundShapes className='bg-shape-1 bg-shape-left' src={bordered_rect} alt="Background shapes" />
                        <BackgroundShapes className='bg-shape-2 bg-shape-left' src={bordered_rect} alt="Background shapes" />
                        <BackgroundShapes className='bg-shape-3 bg-shape-left' src={bordered_rect} alt="Background shapes" />
                        <BackgroundShapes className='bg-shape-4 bg-shape-left' src={bordered_rect} alt="Background shapes" />
                        <BackgroundShapes className='bg-shape-5 bg-shape-left' src={bordered_rect} alt="Background shapes" />
                        <PhoneImage style={{ backgroundImage: `url(${screenshot})` }} alt="Beyond App" />
                    </PhoneImageWrapper>
                    <TextContent>
                        <CardParagraph>
                            Beyond is your gateway to a fully decentralized financial world. Buy, sell,
                            swap, and trade crypto without giving up control.
                        </CardParagraph>
                        <WaitlistButton href="#waitlist">
                            Join the waitlist
                            <ButtonIcon width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                <polyline points="7 7 17 7 17 17"></polyline>
                            </ButtonIcon>
                        </WaitlistButton>
                    </TextContent>
                </ContentDetails>
            </ContentCard>
        </SectionWrapper>
    );
};

export default BeyondSection;