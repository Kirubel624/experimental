import React from 'react'
import styled from "styled-components";
import Navbar from "../components/Navbar"
import Announcement from '../components/Announcement'
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Books from '../components/Books';
import { useLocation } from "react-router";
import { useState } from "react";

const Container = styled.div`

`;

const Title = styled.h1`
margin:20px;
`;

const FilterContainer = styled.div`
display:flex;
justify-content:space-between;
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

//booklist page for a specific category
const BookList  = () => {
  const location = useLocation();
  const cat = location.pathname.split('/')[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters(
      {
       ...filters,
        [e.target.name]:value,
      }
    );

  };
 console.log(filters);
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>{cat}</Title>
      <FilterContainer>
          <Filter>
              <FilterText>Filter Books:</FilterText>
              <Select name='subcategory' onChange={handleFilters}>
                  <Option>All</Option>
                  <Option>drama</Option>
                  <Option>romance</Option>
                  <Option>self-help</Option>
                  <Option>kids </Option>
                  <Option>adventure</Option>
                  <Option>mystery</Option>
                  <Option>thriller</Option>
                  <Option>science</Option>
                  <Option>history</Option>
                  <Option>psychology</Option>
                  <Option>fantacy</Option>
              </Select>
          </Filter>
          <Filter>
              <FilterText>Sort Books:</FilterText>
              <Select onChange={(e) => setSort(e.target.value)}>
                  <Option value ="asc">Price (asc)</Option>
                  <Option value ="desc">Price (desc)</Option>
              </Select>
          </Filter>
      </FilterContainer>
      <Books cat={cat} filters={filters} sort={sort}/>
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default BookList 
