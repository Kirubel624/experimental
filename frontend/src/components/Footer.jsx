import React from 'react'
import styled from "styled-components";
import { Facebook, Instagram, Twitter, Phone, MailOutline, Room } from '@material-ui/icons/index';

const Container= styled.div`
display:flex;
`;

const Left= styled.div`
flex:1;
display:flex;
flex-direction: column;
padding:20px;
`;
const Logo = styled.h1`

`;
const Desc = styled.p`
margin:20px 0px;
`;
const SocialContainer = styled.div`
display:flex;
`;
const SocialIcon = styled.div`
width:40px;
height:40px;
border-radius:50%;
color:white;
background-color:#${props=>props.color};
display:flex;
align-items:center;
justify-content:center;
margin-right:20px;
`;

const Center= styled.div`
flex:1;
padding:20px;

`;

const Title = styled.h3`
margin-bottom:30px;

`;

const List = styled.ul`
margin:0;
padding:0;
list-style:none;
display:flex;
flex-wrap:wrap;
`;

const ListItem = styled.a`
width:50%;
margin-bottom:10px;
`;


const Right= styled.div`
padding:20px;
flex:1;
`;
const ContactItem= styled.div` 
margin-bottom:20px;
display:flex;
align-item:center;
`;



const Footer = () => {
  return (
    <Container>
      <Left>
          <Logo>ANBABI</Logo>
          <Desc>Mega publishing and distribution delivers different kinds of books to readers. Our aim is to make sure sure that the books the readers desire are available in our shop.</Desc>
          <SocialContainer>
              <SocialIcon color='3B5999'>
                  <Facebook />
              </SocialIcon>
              <SocialIcon color='E4405F'>
                  <Instagram />
              </SocialIcon>
              <SocialIcon color='55ACEE'>
                  <Twitter />
              </SocialIcon>
          </SocialContainer>
      </Left>
      <Center>
          <Title>Useful Links</Title>
          <List>
              <ListItem>Home</ListItem>
              <ListItem>Cart</ListItem>
              <ListItem>Order Tracking</ListItem>
              <ListItem>My Account</ListItem>
              <ListItem>Wishlist</ListItem>
              <ListItem>Sell Book</ListItem>
              <ListItem>Donation</ListItem>
              <ListItem>Amazon Book</ListItem>
              <ListItem>Springer</ListItem>
              <ListItem>AASTU Library</ListItem>
          </List>
      </Center>
      <Right>
          <Title>Contact</Title>
          <ContactItem><Room style={{marginRight:'10px'}}/>Where is the nearest book store located ?</ContactItem>
          <ContactItem><Phone style={{marginRight:'10px'}}/>011-1-23-29-04</ContactItem>
          <ContactItem><Phone style={{marginRight:'10px'}}/>011-1-23-29-09</ContactItem>
          <ContactItem><MailOutline style={{marginRight:'10px'}}/>publishing@megabookplc.com</ContactItem>
      </Right>
    </Container>
  );
};

export default Footer
