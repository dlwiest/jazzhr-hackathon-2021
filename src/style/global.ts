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

    strong {
        color: ${({ theme }) => theme.text } !important;
    }
`