import { keyframes } from 'styled-components';

export const popup = keyframes`
  0% {
    transform: translateY(30px);
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  50% {
    opacity: 1;
    transform: translateY(0);
  }
  70% {
    opacity: 1;
    transform: translateY(0);
  }
  80% {
    opacity: 1;
  }
  100% {
    transform: translateY(30px);
    opacity: 0;
    display: none;
  }
`;

export const slidein = keyframes`
  0% {
    transform: translateX(-300px);
  }
  100% {
    transform: translateX(0);
  }
`;
