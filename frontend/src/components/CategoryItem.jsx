import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
flex:1;
margin:3px;
height:70vh;
position:relative;`;

const Image = styled.img`
width:100%;
height:100%;
object-fit:cover;`
;
const Info = styled.div`
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
display:flex;
flex-direction:column;
align-items: center;
justify-content:center;
`;
const Title = styled.h1`
color:white;
margin-bottom:20px;

`;
const Button = styled.button`
border:none;
padding:20px;
background-color:white;
color:	#5C4033;
cursor:pointer;
font-weight:600;`;

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Link to={`/Books/${item.cat}`}>
        <Image src={item.img} />
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
        </Link>
    </Container>
  )
}

export default CategoryItem
