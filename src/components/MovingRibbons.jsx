import React from 'react';
import styled, { keyframes } from 'styled-components';

const scrollText = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const SectionContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 300px;
  // background-color: var(--purple);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  // z-index: 2000;
`;

const RibbonInnerBg = styled.div`
  background-color: var(--purple);
  width: 100%;
  height: 100px;
  position: absolute;
  top: 0;

  @media (min-width: 768px) {
  top: -10px;
  }
`

const RibbonStrip = styled.div`
  background-color: var(--yellow);
  padding: 2.5rem 0;
  font-size: 5rem;
  font-weight: 600;
  color: var(--black);
  line-height: 1;
  overflow: hidden;
  white-space: nowrap;

  position: absolute;
  width: 120%;
  left: -10%;
  
  
  &:nth-of-type(1) {
    top: 60px;
    transform: rotate(-5deg);
    z-index: 200000;
    border-top: 2px solid rgba(0,0,0,0.1);
    border-bottom: 2px solid rgba(0,0,0,0.1);
  }
  @media (min-width: 900px) {
    top: 90px;
  }

  &:nth-of-type(2) {
    top: 150px;
    transform: rotate(10deg); 
    z-index: 10;
    border-top: 2px solid rgba(0,0,0,0.1);
    border-bottom: 2px solid rgba(0,0,0,0.1);
  }

  @media (max-width: 768px) {
    font-size: 3rem;
    &:nth-of-type(1) {
      top: 80px;
    }
    &:nth-of-type(2) {
      top: 130px;
    }
  }
`;

const MovingTextWrapper = styled.div`
  display: inline-block;
  white-space: nowrap;
  animation: ${props => props.bottom ? scrollText : scrollText} 80s linear infinite;
`;

const MovingText = styled.span`
  display: inline-block;
  margin-right: 4rem;
`;

const MarqueeRibbonsSection = () => {
  const ribbonPhrase = `Beyond barriers.`;
  const textContent = Array(20).fill(ribbonPhrase);

  return (
    <SectionContainer>
      <RibbonInnerBg>
        <RibbonStrip>
          <MovingTextWrapper>
            {textContent.map((phrase, i) => (
              <MovingText key={i}>{phrase}</MovingText>
            ))}
          </MovingTextWrapper>
        </RibbonStrip>

        <RibbonStrip>
          <MovingTextWrapper bottom>
            {textContent.map((phrase, i) => (
              <MovingText key={i}>{phrase}</MovingText>
            ))}
          </MovingTextWrapper>
        </RibbonStrip>
      </RibbonInnerBg>
    </SectionContainer>
  );
};

export default MarqueeRibbonsSection;