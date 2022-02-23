import React from "react";
import styled from "@emotion/styled";

function Button({className, children, ...props}){
	return (
		<button className={className} {...props} type="button">
			{children}
		</button>
	)
}

export default styled(Button)`
	font-family: ${props => props.theme.fontFamily.primary};
	background: none;
	border: 0;
	box-sizing: border-box;
	padding: .4em 2em;
	box-shadow: inset 0 0 0 2px ${props => props.color || props.theme.colors.lightColor};
	color: ${props => props.color || props.theme.colors.lightColor};
	font-size: 1.5em;
	font-weight: 700;
	position: relative;
	vertical-align: middle;
	transition: all .2s ease-in-out;
	
	&:hover {
		transform: scale(1.07);
	}
`;