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
      description: "Seamlessly move your crypto in and out of Beyond with fast transfers. Whether you’re sending Bitcoin to a friend or receiving USDT for business, Beyond makes it secure, simple, and hassle-free."
    },
    {
      title: "On&Off ramp with ease",
      description: "You can securely convert crypto to naira or buy with your local currency, all without the risk of handling third parties. Whether you are cashing out or buying in, Beyond makes the process simple and safe."
    },
    {
      title: "Instant swaps",
      description: "Move seamlessly between different cryptocurrencies with lightning fast swaps. Beyond makes it simple to exchange one crypto for another. No complicated steps."
    },
    {
      title: "Quick setup",
      description: "Getting started with Beyond is effortless. No complicated steps or long wait times. Create your account, verify once and you’re ready to go."
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