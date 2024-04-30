import styled from "styled-components"
// components

import Navbar from "../components/Navbar"
import TypedHeaderText from "../components/Header/TypedHeaderText"
import HeroImage from "../components/Header/HeroImage"
import StatRow from "../components/Statistics/StatRow"

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <HomeWrapper>
        
        <TypedHeaderText></TypedHeaderText>
        <HeroImage></HeroImage>
        <StatRow></StatRow>
      </HomeWrapper>
    </>
  )
}

const HomeWrapper = styled.div`
background-color: gray;
`

export default Home