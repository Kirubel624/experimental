import React from 'react';
import styled from 'styled-components';
import Marquee from 'react-easy-marquee';

const Container = styled.div`
color:white;
display:flex;
align-items:center;
justify-content:center;
font-size : 14px;
font-weight : 500;
`;
const P= styled.p`
margin-left:20px;
`;
const Announcement = () => {
  return (
    <Marquee duration={23000} pauseOnHover={false} reverse={true} background="#645452" height="30px" className="marque_container"axis="X" width="100%">

<Container>
        <P>New</P>
        <P>Books</P>
        <P>Every</P>
        <P>Wednesday</P>
        <P>And</P>
        <P>Saturday!</P> 
    </Container>


</Marquee>
  )
}

export default Announcement
