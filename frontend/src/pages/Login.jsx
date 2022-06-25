import React, { useEffect, useState } from "react";
import styled from "styled-components";
import api from "../api/api";
import aha from "../assets/aha.jpg";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/authReducer";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar"
import Announcement from '../components/Announcement'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Container = styled.div`
width:100%;
height:100vh;
background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${aha}) ;
background-size:cover;
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

const Form = styled.div`
display:flex;
flex-direction:column;
`;
const Input = styled.input`
flex:1;
min-width:48%;
margin:10px 0px;
padding:10px;
`;

const Button = styled.button`
width:40%;
border-style:none;
padding:15px 20px;
background-color:#C19578;
color:white;
cursor:pointer;
margin-bottom:10px;
`;

const Links = styled.a`
margin:5px 0px;
font-size:12px;
text-decoration:underline;
cursor:pointer;
`;
const Containers = styled.div`
`;
const Label = styled.label`
   
    color: grey;
  `
const A = styled.a`
color:black;
`
const Error = styled.span`
  color: red;
`;
const Login = (props) => {
  const navigate = useNavigate();

 const { loading, error } = useSelector((state) => state.userAuth);
  const dispatch = useDispatch();
  const [value, setValue] = useState({
    email: "",
    password: "",
  });
  const toastOption = {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
   // theme: light ? "light" : "dark",
    // progress: undefined
  };
 
  const handleLogin = async () => {

    const { email, password } = value;    
    if (!email){
      toast.error("please provide your email!",toastOption);
    }
    else if(!password){
    toast.error("please provide your password!!",toastOption);
    }else
  {try {
    dispatch(login({ loading: true }));

    const { data } = await api.post("/auth/login", value);
    dispatch(login({ data: data, loading: false }));
      navigate("/");
      console.log(data)
  
  } catch (err) {
    dispatch(
      login({
        error: err.response && err.response.data.message,
        loading: false,
      })
    );

    console.log(err);
  }}
    
  };
  return (
    <Containers>
    <Navbar />
      <Announcement />
    <Container>
    <Wrapper>
    {/* {loading ? <h1>Loading... </h1> : error ? <h1>{error}</h1> : ""} */}
      <Title>WELCOME BACK</Title>
      <Form >
      <Input
        name="email"
        id="email"
        onChange={(e) => setValue({ ...value, email: e.target.value })}
        type={"email"}
        placeholder="Email"
      />
      <Input
      name="password"
      id="password"
        onChange={(e) => setValue({ ...value, password: e.target.value })}
        type={"password"}
        placeholder="Password"
      />

      <Button onClick={handleLogin} variant="success" >
      LOG-IN
      </Button>
     
      <p>Don't have an account? <Link to='/signup'>
                Sign Up 
                  </Link></p>
      </Form>
      </Wrapper>
      <ToastContainer />
    </Container>
    </Containers>
    // <p>this is the login page</p>
  );
};

export default Login;