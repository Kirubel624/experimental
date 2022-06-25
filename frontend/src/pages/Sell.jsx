import React from 'react'
import styled from "styled-components";
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Sale from '../assets/Sale.jpg'

const Container = styled.div`

`;

const Title = styled.h1`
font-size:30px;
font-weight:600;
text-align:center;
margin-top:20px;
`;

const Wrapper = styled.div`
padding:30px 50px 50px 50px;
display:flex;
`;
const ImgContainer = styled.div`
flex:1;
`;
const Image = styled.img`
width:100%;
height:90vh;
object-fit :cover; 
`;

const InfoContainer = styled.div`
flex:1;

padding :0px 50px;
`;

const Form = styled.form`
margin-top:0px;
display:flex;
flex-direction:column;
flex-wrap:wrap;
padding:30px 0px;
`;

const Input = styled.input`
flex:1;
min-width:30%;
margin:20px 20px 0px 0px;
padding:10px;
`;

const Button = styled.button`
width:30%;
border:none;
margin-top:20px;
padding:15px 20px;
background-color:#C19578;
color:white;
font-weight:300;
cursor:pointer;
`;

const Sell = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>SELL USEDBOOKS</Title>
      <Wrapper>
          <ImgContainer>
          <Image src={Sale}/>
          </ImgContainer>
          <InfoContainer>
         <Form>

              <Input placeholder='Title' required/>
              <Input placeholder='author' required/>
              <Input placeholder='description' required/>
              <Input placeholder='condition' required/>
              <Input placeholder='image' required/>
              <Input placeholder='category' required/>
              <Input placeholder='price' required/>
              <Input placeholder='ISBN' required/>
              <Input placeholder='pages' required/>
              <Input placeholder='year purchased' required/>
              
              
              <Button>SUBMIT</Button>
          </Form>
          </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default Sell
