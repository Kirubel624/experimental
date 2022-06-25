import React, { useState } from 'react'
import styled from "styled-components";
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import boo from '../assets/boo.jpg'
import { Add, Remove } from '@material-ui/icons';

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

const FilterContainer = styled.div`
display:flex;
flex-direction:column;
padding:15px 0px;
`;

const Form = styled.form`
display:flex;
flex-direction:column;
flex-wrap:wrap;
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

const Filter = styled.div`
margin:20px;
`;

const FilterText = styled.span`
font-size:20px;
font-weight:600;
margin-right:20px;
`;

const Select = styled.select`
padding:10px;
margin:20px;
`;

const Option = styled.option`

`;

const Donation = () => {
  
  const [filters, setFilters] = useState({});

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters(
      {
       ...filters,
        [e.target.name]:value,
      }
    );

  };
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>MAKE DONATION</Title>
      <Wrapper>
          <ImgContainer>
          <Image src={boo}/>
          </ImgContainer>
          <InfoContainer>
         <FilterContainer>
         <Filter>
              <FilterText>Donation type:</FilterText>
              <Select name='subcategory' onChange={handleFilters}>
                  <Option>Money</Option>
                  <Option>Book</Option>
              </Select>
          </Filter>
         </FilterContainer>
         <Form>     
              <Input placeholder='First Name' required/>
              <Input placeholder='Last Name' required/>
              <Input placeholder='email address' required/>
              <Input placeholder='phone number' required/>
              <Input placeholder='Address' required/>
              <Input placeholder='Amount' required/>
              <Input placeholder='Description' required/>
              
              <Button >Submit</Button>
          </Form>
          </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default Donation
