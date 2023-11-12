
import styled from 'styled-components';


const Footer = styled.footer`
  position:relative;
  display: flex;
  justify-content: center;
  border-top: 2px solid #ccc;
  padding: 2rem 0 1.5rem;
  height:50px;
  bottom:0;
`;

const FooterText = styled.p`
  margin: 0;
  padding: 0;
`;

/**
 * Footer component of the application.
 *
 * component for displaying the footer section.
 * It includes copyright information.
 * 
 * @name MainFooter
 * @memberof UI
 * @component
 * @example
 * return (
 *   <FooterComponents />
 * )
 */
function FooterComponents(){
    return <Footer>
    <FooterText>Copyright 2020 Argent Bank</FooterText>
  </Footer>;
}



export default FooterComponents;