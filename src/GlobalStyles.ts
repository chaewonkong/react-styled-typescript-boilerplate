import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyles = createGlobalStyle`
    ${reset}
    *{
        box-sizing: border-box;
    }
    body{
        background-color: #ffffff;
        font-family: Noto Sans KR;
        color: #2F2F2F;
    }
    a {
        text-decoration: none;
        cursor: pointer;
    }
`;
