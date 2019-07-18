import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
const globalStyles = createGlobalStyle`
    ${reset};
    a {
        text-decoration : none;
        color : inherit;
    }
    *{
        box-sizing : border-box;
    }
    body { 
        background-color : rgba(20,20,20,1);
        font-family : -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color : white;
    }
`;

export default globalStyles;
