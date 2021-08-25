import React from 'react'
import styled from 'styled-components'

interface TemplateProps {
	status?: string
	fontSize: string
}

const Template = styled.button<TemplateProps>`
	padding: 0.5em 1em 0.5em 1em;
	border-radius: 4px;
	color: #fff;
	background: ${({ status, theme }) => {
		return (status && status in theme['colors']) ? theme['colors'][status] : theme['colors']['primary']
	}};
	border-color: ${({ status, theme }) => {
		return (status && status in theme['colors']) ? theme['colors'][status] : theme['colors']['primary']
	}};
	border-width: 1px;
	font-size: ${({ fontSize }) => fontSize};
	font-weight: 600;
	cursor: pointer;
	margin: 0.2em;

	&:active {
		filter: brightness(0.85);
	}
`

interface Props extends React.ComponentPropsWithoutRef<'button'> {
	status?: 'primary' | 'success' | 'info' | 'warning' | 'danger' | undefined
	size?: 'small' | 'medium' | 'large' | 'giant'
	children?: React.ReactNode
}

const Button = ({ status, size = 'medium', children, ...props }: Props): JSX.Element => {
	const getFontSize = (size: string) => {
		switch (size) {
			case 'small': return '0.5em'
			case 'large': return '1.25em'
			case 'giant': return '2em'
			default: return '0.85em'
		}
	}

	return <Template {...props} status={status} fontSize={getFontSize(size)}>{children}</Template>
}

export default Button