import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const base = css`
	font-size: ${({ small, medium, large }) => {
		switch (true) {
			case small:
				return '15px';
			case medium:
				return '20px';
			case large:
				return '27.5px';
			default:
				return '20px';
		}
	}};

	font-weight: ${({ light, regular, bold }) => {
		switch (true) {
			case light:
				return '300';
			case regular:
				return '500';
			case bold:
				return '700';
			default:
				return '500';
		}
	}};

	color: ${({ white, black, color }) => {
		switch (true) {
			case white:
				return 'white';
			case black:
				return 'black';
			case color:
				return color;
			default:
				return 'black';
		}
	}};

	font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : 'Helvetica, sans-serif')};
	outline: none;
`;

export const Text = styled.text`
	${base}
`;

export const Button = styled.button`
	${base}
	padding: ${({ padding }) => (padding ? padding : '10px')};
	color: ${({ fontColor }) => (fontColor ? fontColor : 'white')};
	background-color: ${({ bgColor }) => (bgColor ? bgColor : '#363636')};
	border: transparent;
	border-radius: ${({ radius }) => (radius ? radius : '5px')};

	:active {
		border: ${({ borderColor }) =>
			borderColor ? `2px solid ${borderColor}` : '2px solid #616161'};
		margin: -2px;
	}
`;

export const OutlinedButton = styled.button`
	${base}
	padding: ${({ padding }) => (padding ? padding : '10px')};
	background: transparent;

	border: ${({ color }) => (color ? `1px solid ${color}` : '0.1px solid white')};

	border-radius: ${({ radius }) => (radius ? radius : '3px')};
	color: ${({ color }) => (color ? color : 'white')};
	box-shadow: none;

	:hover {
		transition: 0.3s all;
		background-color: ${({ hoverBGColor }) => (hoverBGColor ? hoverBGColor : 'white')};
		color: ${({ hoverTextColor }) => (hoverTextColor ? hoverTextColor : 'black')};
	}
`;

export const FlexContainer = styled.div`
	display: flex;

	align-items: ${({ alignCenter, alignLeft, alignRight }) => {
		switch (true) {
			case alignCenter:
				return 'center';
			case alignLeft:
				return 'flex-start';
			case alignRight:
				return 'flex-end';
			default:
				return 'flex-start';
		}
	}};

	justify-content: ${({
		contentCenter,
		contentLeft,
		contentRight,
		contentBetween,
		contentAround,
		contentEvenly,
	}) => {
		switch (true) {
			case contentCenter:
				return 'center';
			case contentLeft:
				return 'flex-start';
			case contentRight:
				return 'flex-end';
			case contentBetween:
				return 'space-between';
			case contentAround:
				return 'space-around';
			case contentEvenly:
				return 'space-evenly';
			default:
				return 'flex-start';
		}
	}};

	flex-direction: ${({ row, column }) => {
		switch (true) {
			case row:
				return 'row';
			case column:
				return 'column';
			default:
				return 'row';
		}
	}};

	flex: ${({ flex }) => (flex ? flex : '1')};
`;

export const Box = styled.div`
	width: ${({ width }) => (width ? width : '50%')};
	height: ${({ height }) => (height ? height : '50%')};

	border: ${({ boldBorder, softBorder }) => {
		switch (true) {
			case boldBorder:
				return '1px solid #333333';
			case softBorder:
				return '1px solid #e0e0e0';
			default:
				return 'none';
		}
	}};
`;

export const InputBox = styled.input`
	${base}
	padding: ${({ padding }) => (padding ? padding : '10px')};
	outline: none;
	border-radius: ${({ radius }) => (radius ? radius : '3px')};
	color: ${({ color }) => (color ? color : '#787878')};
`;

export const Jumbotron = styled(FlexContainer)`
	background-color: ${({ color }) => (color ? color : 'none')};
	background-image: url(${({ img }) => img});

	width: 100vw;
	height: ${({ height }) => (height ? height : '40vh')};

	border-bottom: ${({ boldBorder, softBorder }) => {
		switch (true) {
			case boldBorder:
				return '1px solid #333333';
			case softBorder:
				return '1px solid #e0e0e0';
			default:
				return 'none';
		}
	}};
`;

export const FlexList = styled(FlexContainer)`
	li {
		list-style: none;
	}
`;

export const StyledLink = styled(Link)`
	${base}
	text-decoration: none;

	:hover {
		color: ${({ hoverColor }) => (hoverColor ? hoverColor : '#4d4d4d')};
	}
`;
