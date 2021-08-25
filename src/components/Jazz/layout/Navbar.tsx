import styled from 'styled-components'

const Template = styled.div`
    background: linear-gradient(to right,#732582,#542d88 50%,#3859b6);
    display: flex;
    justify-content: center;
`

const TemplateInner = styled.div`
    max-width: 1024px;
    color: #fff;
    padding: 1em 0 1em 0;
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    justify-content: space-between;
`

interface Props {
    children: JSX.Element | JSX.Element[]
}

const Navbar = ({ children }: Props) => {
    return <Template>
        <TemplateInner>
            {children}
        </TemplateInner>
    </Template>
}

export default Navbar