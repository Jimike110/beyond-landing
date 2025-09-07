import React from 'react';
import styled from 'styled-components';

const FeaturesContainer = styled.div`
  display: grid;
  gap: 7rem;
  padding: 2rem;
  font-family: sans-serif;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const FeatureCard = styled.div`
  h3 {
    color: var(--purple);
    font-size: 2.4rem;
    line-height: 1.2;
    font-weight: 600;
    margin-bottom: 3rem;

    @media (min-width: 768px) {
      font-size: 2.8rem;
    }
  }

  p {
    color: var(--black);
    font-size: 1.7rem;
    line-height: 1.5;

    @media (min-width: 768px) {
      font-size: 1.9rem;
    }
  }
`;

const BeyondFeatures = () => {
  const features = [
    {
      title: "Send & receive",
      description: "With Beyond, you’re in full control of your assets instantly send or receive crypto across borders with just a few taps. No delays just simple decentralized transfers designed to keep you empowered"
    },
    {
      title: "On&Off ramp with ease",
      description: "You can securely convert crypto to naira or buy with your local currency all without the risk of handling third parties. Whether you are cashing out or buying in, Beyond makes the process simple and safe."
    },
    {
      title: "Instant swaps",
      description: "Move seamlessly between different cryptocurrencies with lightining fast swaps. Beyond makes it simple to exchange one crypto for another no complicated steps"
    },
    {
      title: "Quick setup",
      description: "Get started in 1 min Beyond makes wallet creation effortless and secure. Your wallet, your rules we never hold your funds giving you full control."
    }
  ];

  return (
    <FeaturesContainer>
      {features.map((feature, index) => (
        <FeatureCard key={index}>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </FeatureCard>
      ))}
    </FeaturesContainer>
  );
};

export default BeyondFeatures;