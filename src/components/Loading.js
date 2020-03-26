import React from 'react';
// import './Loading.css';

import styled from 'styled-components';

const LoadingDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    position: relative; 
    `;

function Loading() {
    return (
            <LoadingDiv>
            <img
            src ='https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif'
            alt='Loading'></img>
            </LoadingDiv>
    );
}

export default Loading;