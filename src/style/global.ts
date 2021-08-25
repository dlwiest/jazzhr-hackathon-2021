import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    body {
        height: 100vh;
        background: ${({ theme }) => theme.body };
        color: ${({ theme }) => theme.text };
    }

    h1, h2, h3, h4, h5, h6 {
        color: ${({ theme }) => theme.text } !important;
    }

    h1 {
        font-size: 2.8em !important;
    }

    h2 {
        font-size: 2.4em !important;
    }

    h3 {
        font-size: 2.2em !important;
    }

    strong {
        color: ${({ theme }) => theme.text } !important;
    }
`