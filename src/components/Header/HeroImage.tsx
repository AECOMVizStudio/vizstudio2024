import styled from 'styled-components';

import architecture from './Hero.png';



const HeroImage = () => {
    return (
        <ImageContainer>
            <StyledHeroImage src={architecture} alt="hero image"></StyledHeroImage>
        </ImageContainer>
    )
}

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem auto;
  width: 90vw;

  overflow-x: hidden;
`

const StyledHeroImage = styled.img`
    width: 100%;
    border-radius: 2px;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
`;

export default HeroImage