import styled from 'styled-components';


interface NavLinkProps {
  isActive?: boolean;
}

const Navbar: React.FC = () => {
  const links = [
    {text: 'Portfolio', page: 'portfolio'}, 
    {text: 'About Us', page: 'aboutus'},
];

  return (
    <StyledNavContainer>
      <StyledTitle>AECOM Viz Studio</StyledTitle>
      <StyledNavList>
        {links.map((link) => (
          <StyledNavLink key={link.text} href={link.page}>
            {link.text}
          </StyledNavLink>
        ))}
      </StyledNavList>
    </StyledNavContainer>
  );
};

const StyledTitle = styled.p`
  color: #030303;
  font-size: 20px;
  font-family: "Roboto Mono";
  line-height: 22px;

  font-weight: bold;
`

const StyledNavLink = styled.a<NavLinkProps>`
  color: ${(props) => (props.isActive ? 'white' : '#333')};
  text-decoration: none;
  padding: 1rem;
  font-weight: bold;
  font-family: "Roboto Mono";

  &:hover {
    color: ${(props) => (props.isActive ? 'lightgray' : '#666')};
  }
`;

const StyledNavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const StyledNavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 90vw;
  margin: 2rem auto;
  
  background-color: #fff; /* Light gray background */

  @media (max-width: 768px) {
    flex-direction: column; /* Stack links vertically on small screens */
    align-items: flex-start; /* Left-align links on small screens */
  }
`;

export default Navbar;