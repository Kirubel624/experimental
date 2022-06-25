import React from 'react'
import { Send } from '@material-ui/icons';
import styled from "styled-components";
import { useState } from "react";
import axios from 'axios';
import { publicRequest } from "../requestMethods";

const Container = styled.div`
height:60vh;
background-color:#fcf5f5;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`;

const Title = styled.h1`
font-size:70px;
margin-bottom:20px;
`;

const Description = styled.div`
font-size:24px;
font-weight:300;
margin-bottom:20px;
`;

const InputContainer = styled.div`
width:50%;
height: 40px;
background-color:white;
display:flex;
justify-content:space-between;
border:1px solid lightgray;
`;

const Input = styled.input`
border:none;
flex:8;
padding:20px;
`;

const Button = styled.button`
 flex:1;
 border:none;
 background-color:#C19578;
 cursor:pointer;
 color:white;
`;

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await publicRequest.post("http://localhost:5000/api/subscribers", {
        email,
      });
      setEmail('')
      console.log(res)
      
    } catch (err) {
      setError(true);
    }
  setEmail('')
  };
  const handleSubmit1=(e)=>{
    e.target.reset();
  setEmail('')

  }
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely updates</Description>
      <InputContainer >
      {/* <form onSubmit={handleSubmit1}> */}
          <Input  placeholder='Your Email'  onChange={(e) => setEmail(e.target.value)}/>
          <Button onClick={handleSubmit} >
            <Send />
          </Button>
          {/* </form> */}
      </InputContainer>
      
    </Container>
  )
}

export default Newsletter
