import styled from 'styled-components';
import bankTree from '../img/bank-tree.jpeg';
import chatIcon from '../img/icon-chat.png';
import moneyIcon from '../img/icon-money.png';
import securityIcon from '../img/icon-security.png';


import { MainStyle } from '../style/Global';

const Main = styled(MainStyle)`
  background-color: #ffffff;
  padding: 0rem;
  width:100%;
`

const Hero = styled.div`
  background-image: url(${props => props.$bgImage});
  background-position: 0 -50px;
  background-size: cover;
  background-repeat: no-repeat;
  height: 300px;
  position: relative;

  @media (min-width: 920px) {
    height: 400px;
    background-position: 0% 33%;
  }
`;

const HeroContent = styled.section`
  position: relative;
  top: 2rem;
  width: 200px;
  background: white;
  padding: 2rem;
  text-align: left;
  margin: 0 auto;

  @media (min-width: 920px) {
    position: absolute;
    top: 50px;
    right: 50px;
    width: 300px;
    margin: 2rem;
  }
`;

const Subtitle = styled.p`
  font-weight: bold;
  font-size: 1rem;
  margin: 0;

  @media (min-width: 920px) {
    font-size: 1.5rem;
  }
`;

const Text = styled.p`
  margin-bottom: 0;
  font-size: 0.9rem;

  @media (min-width: 920px) {
    font-size: 1.2rem;
  }
`;


const Features = styled.section`
  display: flex;
  flex-direction: column;

  @media (min-width: 920px) {
    flex-direction: row;
  }
`;

const FeatureItem = styled.div`
  flex: 1;
  padding: 2.5rem;
`;

const FeatureIcon = styled.img`
  width: 100px;
  border: 10px solid #00bc77;
  border-radius: 50%;
  padding: 1rem;
`;

const FeatureItemTitle = styled.h3`
  color: #222;
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

function LandingPage (){
  return <Main>
      <Hero $bgImage={bankTree}>
    <HeroContent>
      <h2 className="sr-only">Promoted Content</h2>
      <Subtitle>No fees.</Subtitle>
      <Subtitle>No minimum deposit.</Subtitle>
      <Subtitle>High interest rates.</Subtitle>
      <Text>Open a savings account with Argent Bank today!</Text>
    </HeroContent>
  </Hero>

  <Features>
    <h2 className="sr-only">Features</h2>
    
    <FeatureItem>
      <FeatureIcon src={chatIcon} alt="Chat Icon" />
      <FeatureItemTitle>You are our #1 priority</FeatureItemTitle>
      <p>
        Need to talk to a representative? You can get in touch through our
        24/7 chat or through a phone call in less than 5 minutes.
      </p>
    </FeatureItem>
    
    <FeatureItem>
      <FeatureIcon src={moneyIcon} alt="Money Icon" />
      <FeatureItemTitle>More savings means higher rates</FeatureItemTitle>
      <p>
        The more you save with us, the higher your interest rate will be!
      </p>
    </FeatureItem>
    
    <FeatureItem>
      <FeatureIcon src={securityIcon} alt="Security Icon" />
      <FeatureItemTitle>Security you can trust</FeatureItemTitle>
      <p>
        We use top of the line encryption to make sure your data and money
        is always safe.
      </p>
    </FeatureItem>
    
  </Features>

  </Main>
};

export default LandingPage;