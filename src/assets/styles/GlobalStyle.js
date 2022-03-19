import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  *, *::after, *::before {
    box-sizing: border-box;
    margin: 0;
  }

  @media(min-width: ${({ theme }) => theme.viewportSize.m}) {
    *::-webkit-scrollbar {
      width: 10px;
      }

    *::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.colors.secondary.gray};
    }
    
    *::-webkit-scrollbar-thumb {
      background: #555;
      border-radius: 20px;
      
      &:hover {
        background: #888;
        }
      }
  }

  
  
  body {
    font-family: 'Inter', sans-serif;
    color: ${({ theme }) => theme.colors.primary.mainText};
    height: -webkit-fill-available;
  }
  
  a, button {
    font-family: 'Inter', sans-serif;
    color: ${({ theme }) => theme.colors.primary.mainText};
    text-decoration: none;
  }

  .ReactModal__Overlay {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  .ReactModal__Overlay--after-open {
    z-index: 9999;
    opacity: 1;
    overflow-y: auto;
  }

    
  .ReactModal__Overlay--before-close{
    opacity: 0;
  }
`;
