import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@mui/material';
import React from 'react'
import styled from "styled-components"
// import logout from '../pages/logout/Logout'
import { useContext, useRef } from "react";
import { Context } from "../context/Context";
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Link, NavLink } from "react-router-dom";
import { useDispatch} from "react-redux";
import {logout} from '../redux/authReducer'
const Container = styled.div`
position: sticky;
 height : 60px;
 @media Screen and (max-width:960px){
     transition:0.8s all ease;
 }
`;
const Wrapper = styled.div`
padding : 10px 20px;
display:flex;
align-items:center;
justify-content:space-between;
`;
const Left = styled.div`
flex:1;
display:flex;
align-items:center;
`;

const Language = styled.span`
font-size:14px;
cursor: pointer;
`;

const SearchContainer = styled.div`
border-style:1px solid lightgray;
display:flex;
align-items:center;
margin-left: 25px;
padding:5px;
`;

const Input = styled.input`
border-style:none;
`;

const Center = styled.div`
flex:1;
text-align  : center;
`;

const Logo= styled.h1`
font-weight:bold;`;

const Right = styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;
`;

const MenuItem = styled.div`
font-size : 14px;
cursor:pointer;
margin-left: 25px;
`;


const Navbar = () => {
    const quantity = useSelector(state=>state.cart.quantity)
    //const { user} = useContext(Context);
    const setBooks = ''
    const  SearchHandler=async(event)=>{
const key = event.target.value;
const result = await axios.get(`http://localhost:5000/api/books/findtitle?title=${key}`);
console.log(result)
result = await result.json();
if(result){
    setBooks(result)
}
    }
    const data = useSelector((state) => state.userAuth.data);
    const dispatch = useDispatch();
    
 const refreshPage=() =>{
  
  }
  const logUserout=()=>{
    dispatch(logout());
    // window.location.reload(true);
    // window.location.replace("/")
  }
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input placeholder='Search' onClick={SearchHandler}/>
                    <Search style={{color:'brown' , fontSize:16}}/>
                </SearchContainer>
            </Left>
            
            <Center>
                <Link to="/" style={{ textDecoration: 'none', color: 'black' }}><Logo>ANBABI</Logo></Link>
                </Center>
            <Right>

            {data?.data?.accessToken?(
            <div><h3>welcome,</h3> {data.data?.userName}
           <NavLink
          onClick={() => {
            logUserout();

          }}
          to={'/'}
        >
          Logout
        </NavLink></div>):<div><Link to='/Register' style={{ textDecoration: 'none', color: 'black' }}>
            <MenuItem>SIGN UP</MenuItem>
            </Link>
            <Link to='/Login' style={{ textDecoration: 'none', color: 'black' }}>
            <MenuItem>LOG IN</MenuItem>
            </Link></div>}

                  <Link to = "/MyCart">
                  <MenuItem>
                       <Badge badgeContent={quantity} color='primary'>
                    <ShoppingCartOutlined />
                   </Badge>
                </MenuItem>
              </Link>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar;
