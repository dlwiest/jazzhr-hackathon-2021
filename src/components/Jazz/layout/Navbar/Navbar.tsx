import styled from 'styled-components'

const Template = styled.div`
    background: linear-gradient(to right,#732582,#542d88 50%,#3859b6);
    display: flex;
    justify-content: center;
`

const TemplateInner = styled.div`
    max-width: 1024px;
    color: #fff;
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    justify-content: space-between;
`

interface Props {
    children: JSX.Element | JSX.Element[]
}

const Navbar = ({ children }: Props): JSX.Element => {
    return <Template>
        <TemplateInner>
            {children}
        </TemplateInner>
    </Template>
}

export default Navbar