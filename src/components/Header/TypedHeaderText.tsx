import styled from "styled-components"

const TypedHeaderText = () => {
  return (
    <TitleWrapper>
      <TypedText>AECOM Viz Studio - typed.js thing npm install</TypedText>
      <Subtitle>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eligendi eos, laudantium impedit autem veniam.</Subtitle>
    </TitleWrapper>
  )
}

export default TypedHeaderText

// grid of 3 wide. 1 and 2 are typed header.

const TitleWrapper = styled.div`
  background-color: pink;
  display: flex;
  margin: 2rem auto;
  width: 90vw;
  min-height: 180px;

  overflow-x: hidden;
`;

const TypedText = styled.div`
  background-color: green;
  flex:2;

  /* Uizard export */
  color: #000;
  font-size: 64px;
  font-family: "Roboto Mono";
  font-weight: 500;
  line-height: 72px;
`;

const Subtitle = styled.div`
  background-color: orange;
  flex:1;

  align-self: flex-end;
  padding-right: 1rem;

  /*Uizard Export */
  color: #393939;
  font-size: 18px;
  font-family: "Roboto Mono";
  font-weight: 300;
  text-align: right;
  
`
