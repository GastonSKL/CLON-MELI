import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
        :root{
            --mainYellow: #fff159;
            --mainTextBlack:#000000;
            --mainGreen: #00a650;
            --mainBlue: #3483fa;
            --mainBackground: #ededed;
        }  
        html{
            min-height: 100%;
            background-color: var(--mainBackground);
        } 
        
`