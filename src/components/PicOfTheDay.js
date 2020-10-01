import React from 'react';
// import './PicOfTheDay.css';

import styled from 'styled-components';
import {keyframes} from 'styled-components'

// Set styles for component with styled-components
const floatAnimation = keyframes`
0% {
    box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
    transform: translatey(0px);
}
50% {
    box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
    transform: translatey(-20px);
}
100% {
    box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
    transform: translatey(0px);
}
`

const ImgDiv = styled.div`
    display: block;
    width: 50%;
    margin: 0 auto;
    padding: 3% 3%;
    animation-name: ${floatAnimation};
    animation-duration: 5s;
    animation-iteration-count: 10;
    border: 10px solid black;

    @media (max-width: 950px) {
        width: 75%;
    }
    @media (max-width: 500px) {
        width: 100%;
        animation: none;
        font-weight: bold;
    }

    font-family: 'Open Sans', sans-serif;
    background-color: black;
    color: white;
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

// pass props into this component
// build component using data from state
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