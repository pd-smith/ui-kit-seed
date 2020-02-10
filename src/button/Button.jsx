import React from 'react';
import styled from '@emotion/styled';
import getButtonStyles from '../styles/button';

const StyledButton = styled.button(getButtonStyles());

const Button = (props) => {
	const { children, ...restOfProps } = props;
	return <StyledButton {...restOfProps}>{children}</StyledButton>;
};
Button.displayName = 'Button';
export default Button;
