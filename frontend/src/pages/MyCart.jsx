import React from 'react'
import styled from "styled-components";
import Navbar from "../components/Navbar"
import Announcement from '../components/Announcement'
import Footer from '../components/Footer';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { removeBook } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import api from '../api/api';


const Container = styled.div`

`;

const Wrapper = styled.div`
padding:20px;
`;

const Title = styled.h1`
font-weight:300;
text-align:center;
`;

const Top = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
padding:20px;
`;

const TopButton =styled.div`
padding:10px;
font-weight:600;
`;

const TopTexts = styled.div`

`;
const TopText = styled.span`
text-decoration:underline;
cursor:pointer;
margin : 0px 10px;
`;

const Bottom = styled.div`
display:flex;
justify-content:space-between;
`;

const Info = styled.div`
flex:3;
`;

const Book = styled.div`
display:flex;
justify-content:space-between;
margin-bottom:15px;
`;

const BookDetail = styled.div`
flex:2;
display:flex;
`;

const Image = styled.img`
width:230px;
height:310px
`;

const Details = styled.div`
padding:20px;
display:flex;
flex-direction:column;
margin:30px 0px;
padding-bottom:10px;
`;

const BookName = styled.span`
padding-bottom:26px;
padding-left: 45px;
`;

const BookCategory = styled.span`
padding-bottom:26px;
padding-left: 45px;
`;
const BookEdition = styled.span`
padding-bottom:26px;
padding-left: 45px;
`;
const BookAuthor = styled.span`
padding-bottom:26px;
padding-left: 45px;
`;
const PriceDetails = styled.span`
flex:1;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`;

const BookAmountContainer = styled.div`
display:flex;
align-items:center;
margin-bottom:20px;
`;

const BookAmount = styled.div`
font-size:20px;
margin:5px;
`;

const Quantity = styled.div`
font-size:16px;
margin:5px;
`;

const BookPrice = styled.div`
font-size:30px;
font-weight:200;
`;

const Hr = styled.hr`
background-color:#eee;
border:none;
height:10px;
`;

const Summary = styled.div`
flex:1;
border:0.5px solid lightgray;
border-radius:10px;
padding: 20px;
height:40vh;
`;

const SummaryTitle = styled.h1`
font-weight:200;
`;

const SummaryItem = styled.div`
margin:30px 0px;
display:flex;
justify-content:space-between;
font-weight:500px;
font-size:${(props)=>props.type === 'total' && '24px' };
`;

const SummaryItemText = styled.span`

`;

const SummaryItemPrice = styled.span`

`;

const SummaryButton = styled.button`
width:100%;
padding:10px;
background-color:#3D2B1F;
font-weight:600;
cursor: pointer;
color:white;
&:hover {
    background-color: #C19578;
    color:white;
    border:none;
  }
`;
const ButtonContainer = styled.div`
display:flex;
margin-top:20px;

`
const Button = styled.button`
margin-left:20px;
margin-top:10px;
  padding: 15px;
  cursor: pointer;
  display:flex;
  font-weight: 500;

  border:${(props)=>props.type === 'filled' && 'none' };
  background-color:${(props)=>
      props.type === 'filled' ? '#3D2B1F' :'transparent' };
  color:${(props)=>props.type === 'filled' && 'white' };
  &:hover {
    background-color: #C19578;
    color:white;
    border:none;
  }
  


`

const MyCart = () => {
  const cart = useSelector((state) => state.cart);
  const data = useSelector((state) => state.userAuth.data);
  const [book, setBook] = useState({});
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    cart.Books.map((book) => (
      dispatch(removeBook(book))
    ))
    
  };
  const onFinish = (values) => {
      console.log(values);
    };
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <Container>
        <Announcement />
      <Navbar />
     
      <Wrapper>
          
          <Top>
              <TopButton><Title>MY CART</Title></TopButton>
              <TopTexts>
                  <TopText>Shopping cart ({cart.quantity})</TopText>
              </TopTexts>
          </Top>
          <Bottom>
              <Info>
              {cart.Books.map((book) => (
                  <Book key={book._id}>
                      <BookDetail>
                          <Image src={book.img} />
                          <Details>
                              <BookName>
                              <b>Book:</b> {book.title} 
                              </BookName>
                              <BookCategory>
                              <b>Category:</b> {book.category}
                              </BookCategory>
                              <BookAuthor>
                                <b>Author:</b>{book.author}
                              </BookAuthor>
                              <BookEdition>
                                <b>Edition:</b> {book.edition}
                              </BookEdition>
                            
                          </Details>
                      </BookDetail>
                      <PriceDetails>
                          <BookAmountContainer>
                              <Quantity>
                               
                              <BookAmount> <b>Amount:</b> {book.quantity}</BookAmount>
                              </Quantity>

                          </BookAmountContainer>
                          <BookPrice>{book.price * book.quantity} Birr</BookPrice>
                          <ButtonContainer>
              <Button onClick={handleClick}>Remove item</Button>
              </ButtonContainer>
                      </PriceDetails>
                  </Book> 
              ))}
             
              </Info>
              <Hr />
              <Summary>
                  <SummaryTitle>SUMMARY</SummaryTitle>
                  <SummaryItem>
                      <SummaryItemText>Subtotal</SummaryItemText>
                      <SummaryItemPrice>{cart.total} Birr</SummaryItemPrice>
                  </SummaryItem>
                  <SummaryItem>
                      <SummaryItemText>Delivery Fee</SummaryItemText>
                      <SummaryItemPrice>20 Birr</SummaryItemPrice>
                  </SummaryItem>
                 
                  <SummaryItem type='total'>
                      <SummaryItemText>Total</SummaryItemText>
                      <SummaryItemPrice>{cart.total} Birr</SummaryItemPrice>
                  </SummaryItem>
                  <SummaryItem type='total'>
                      <SummaryItemText>Address</SummaryItemText>
                     <input
            type="text"
            placeholder="Address"
            className="writeInput"
            autoFocus={true}
            onChange={e=>setAddress(e.target.value)}
          />
       
                  </SummaryItem>
                  <SummaryItem type='total'>
                      <SummaryItemText>Phone Number</SummaryItemText>
                      <input
            type="text"
            placeholder="PhoneNumber"
            className="writeInput"
            autoFocus={true}
            onChange={e=>setPhoneNumber(e.target.value)}
          />
                  </SummaryItem>
                  {data.data?.accessToken?<SummaryButton onClick={(e)=>{
                    e.preventDefault();
                    const formData = new FormData();
                    formData.append("address", address);
                    formData.append("phoneNumber", phoneNumber);
                  
                    api.post("/order", formData, {
                      headers: {
                        "Access-Control-Allow-Origin": true,
                        token: `Bearer ${data.accessToken}`,
                      },
                    }
                    
                    );
                    /* navigate("/"); */
                    /* window.location.reload(false) */
                    /* const data = {
                      title:title,
                      desc: desc,
                     
                  
                      user: { username: data.data.username },
                    };
                    setAddress("");
                    setPhoneNumber("");
                    dispatch(
                      getAllblogPost({
                        ...postData,
                        posts: [...postData.posts, data],
                      })
                    ); */

                  }
                    
                  }  >CHECKOUT NOW</SummaryButton>:<Link to='/Login'><SummaryButton disabled>YOU ARE NOT LOGGED IN TO CHECKOUT</SummaryButton></Link>}
              
            
            
              </Summary>
          </Bottom>
      </Wrapper>
      <Footer / >
    </Container>
  )
}

export default MyCart
