import React from 'react';
import styled, { keyframes } from 'styled-components';

const PlayingAnimation = () => {
    return(
        <Playing>
            <span />
            <span />
            <span />
        </Playing>
    )
};

export default PlayingAnimation;

const Animation = keyframes`
    10% {
    transform: scaleY(0.3);
  }

  30% {
    transform: scaleY(1);
  }

  60% {
    transform: scaleY(0.5);
  }

  80% {
    transform: scaleY(0.75);
  }

  100% {
    transform: scaleY(0.5);
  }
`;

const Playing = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    width: 13px;
    height: 13px;
  
    span {
        width: 3px;
        height: 100%;
        background-color: #1ED760;
        border-radius: 3px;
        animation: ${Animation} 2.2s ease infinite alternate;
        content: '';
        transform-origin: bottom;

        &:nth-of-type(2) {
            animation-delay: -2.2s;
        }
    
        &:nth-of-type(3) {
            animation-delay: -3.7s;
        }
        
    }
`;