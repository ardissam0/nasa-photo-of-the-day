import React from 'react';
// import './PicOfTheDay.css';

import styled from 'styled-components';

const ImgDiv = styled.div`
display: block;
    width: 55%;
    height: 100%;
    margin: 0 auto;
    padding: 5% 5%;
    border: 10px solid black;

    font-family: 'Open Sans', sans-serif;
    background-color: coral;
    color: black;
    display: flex;
    flex-direction: column;

    -webkit-box-shadow: 5px 5px 15px 5px white;
    box-shadow: 5px 5px 15px white;
    `;

    const Img = styled.img`
    width: 100%
    `;

    const TitleDiv = styled.div`
    font-size: 1.6rem;
    font-weight: 800;
    text-align: start;
    line-height: 5.5rem;
    `;
    
    const H2Div = styled.div`
    margin: 0;
    text-align: start;
    `;

    const PDiv = styled.div`
    text-align: start;
    width: 100%;
    `;

    const TxtBottomDiv = styled.div`
    text-align: end;
    margin: 0rem 0 1rem;
    `;


const PicOfTheDay = ({date, title, url, explanation}) => {
    return (
        <ImgDiv>
            <div>
                <Img src ={url} alt ='Nasa' />
            </div>
            <H2Div>Date: {date}</H2Div>
            <TxtBottomDiv>By: NASA</TxtBottomDiv>
            <TitleDiv>{title}</TitleDiv>
            <div>
                <PDiv>{explanation}</PDiv>
            </div>
        </ImgDiv>
    );
};

export default PicOfTheDay;