import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import { addBook } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 95vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  margin: 80px;
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 30px 0px;
  font-weight: 400;
`;
const Author = styled.p`
  margin-top: 30px;
  font-weight: 400;
`;
const Edition = styled.p`
  margin: 10px 0px;
  font-weight: 400;
`;
const Pages = styled.p`
  margin: 0px;
  font-weight: 400;
`;
const Price = styled.span`
  font-weight: 300;
  margin: 20px 0px;
  font-size: 40px;
`;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  margin: 40px 0px;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const ButtonContainer = styled.div`
display:flex;

`
const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
  }
`;

const Book = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [book, setBook] = useState({});
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await publicRequest.get("/books/find/" + id);
      
       setBook(res.data);
      } catch(err) {}
    };
    getBook();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(
      addBook({ ...book, quantity})
    );
  };
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={book.img} />
          </ImgContainer>
          <InfoContainer>
              <Title>{book.title}</Title> 
              <Desc><b>Description: </b> {book.description}</Desc>
              <Author> <b>Author: </b> {book.author} </Author> <br/>
              <Pages> <b>Pages: </b> {book.pages} </Pages> <br/>
              
              <Pages> <b>Category: </b> {book.category} </Pages> <br/>
              <Edition> <b>Edition: </b> {book.edition} </Edition>  <br/>
              <Price>Price: {book.price} </Price> <br/>
              <AddContainer>
                  <AmountContainer>
                      <Remove onClick={()=>handleQuantity("dec")}/>
                      <Amount>{quantity}</Amount>
                      <Add  onClick={()=>handleQuantity("inc")}/>
                  </AmountContainer>
              </AddContainer>
              <ButtonContainer>
              <Button onClick={handleClick}>ADD TO CART</Button>
              </ButtonContainer>
          </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default Book
