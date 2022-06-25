import { render } from '@testing-library/react';
import React, { Component } from 'react'
import Navbar from "../components/Navbar"
import Announcement from '../components/Announcement'
import Newsletter from '../components/Newsletter';
import styled from "styled-components";
import favbook from "../assets/favbook.jpg";
import { publicRequest } from "../requestMethods";
import { useState } from "react";
import api from '../api/api'
import { useSelector, useDispatch } from "react-redux";
import { register } from "../redux/authReducer";
import { useNavigate } from "react-router-dom";
import { Link} from "react-router-dom";
import Footer from '../components/Footer'

const Container = styled.div`
width:100%;
height:100vh;
background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${favbook}) ;

background-size:cover;
background-repeat:no-repeat;

display:flex;
align-items:center;
justify-content:center;
`;

const Wrapper = styled.div`
width:25%;
padding:20px;
background-color:white;
`;

const Title = styled.h1`
font-size:24px;
font-weight:300;
text-align:center;
`;

const Form = styled.form`
display:flex;
flex-wrap:wrap;
`;

const Input = styled.input`
flex:1;
min-width:48%;
margin:20px 20px 0px 0px;
padding:10px;
`;

const Agreement = styled.span`
font-size:12px;
margin:20px 0px;

`;

const Button = styled.button`
width:40%;
border:none;
padding:15px 20px;
background-color:#C19578;
color:white;
cursor:pointer;
margin-bottom:10px;
`;
const A = styled.a`
color:black;
`
const Containers = styled.div`

`;
const Register = () => {
  
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await publicRequest.post("http://localhost:5000/api/auth/register", {
        userName,
        email,
        password,
        phoneNumber
      });
      res.data && window.location.replace("/Login");
    } catch (err) {
      setError(true);
    }
  };
return (
  <Containers>
     <Announcement />
    <Navbar/>
  
  <Container>
    <Wrapper>
        <Title>WELCOME</Title>
        <Form onSubmit={handleSubmit}>
    
            <Input type = 'text'
             placeholder ="Username"
            onChange={(e) => setUsername(e.target.value)}
             />
     
            <Input  type='email'
             placeholder ="Email"
            onChange={(e) => setEmail(e.target.value)}
             />
           
            <Input  type='password'
            placeholder ="Password"
             onChange={(e) => setPassword(e.target.value)} 
             />
                
              <Input  type="number" 
               placeholder ="Phone Number"
               onChange={(e) => setPhoneNumber(e.target.value)}
                 />


            <Button  type="submit">Sign-up</Button>
            <p>Already have an account? <Link to='/Login'>
                <A> <a>Log-in</a> </A>
                  </Link></p>
                
        </Form>
    </Wrapper>
  </Container>
  <Newsletter />
        <Footer />
  </Containers>
  
)

}
export default Register
