import React from 'react';
import styled from '@emotion/styled';
import colors from '../styles/colors';

const StyledButton = styled.button(
	{
		margin: '3px'
	},
	({ secondary }) => ({
		backgroundColor: secondary ? colors.br_moonstone : colors.br_blue,
		color: secondary ? 'black' : colors.br_offwhite
	})
);

const Button = (props) => {
	const { children, ...restOfProps } = props;
	return <StyledButton {...restOfProps}>{children}</StyledButton>;
};
Button.displayName = 'Button';
export default Button;
