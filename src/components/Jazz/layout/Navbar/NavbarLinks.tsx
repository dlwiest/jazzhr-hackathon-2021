import styled from 'styled-components'

const Template = styled.div`
    display: flex;
    flex-direction: row;
    flex-grow: 1;

    a {
        color: #fff;
        padding: 0 0.8em 0 0.8em;
        opacity: 0.65;
        transition: opacity ease-in-out 0.3s;
        display: block;
        padding: 1em 0.75em 1em 0.75em;
    }

    a:hover {
        opacity: 1.0;
    }
`

export default Template