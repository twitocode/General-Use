import styled, { css } from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

const base = css`
	font-size: ${({ sm, md, lg, size }) => {
		if (size) return size;
		switch (true) {
			case sm:
				return '1.125rem';
			case md:
				return '1.25rem';
			case lg:
				return '1.5rem';
			default:
				return '1rem';
		}
	}};

	font-weight: ${({ light, regular, bold, weight }) => {
		if (weight) return weight;
		switch (true) {
			case light:
				return '300';
			case regular:
				return '500';
			case bold:
				return '700';
			// case weight:
			// 	return weight;
			default:
				return '500';
		}
	}};

	color: ${({ white, black, color, theme }) => {
		if (color) return color;
		switch (true) {
			case white:
				return 'white';
			case black:
				return 'black';
			default:
				return 'black';
		}
	}};

	font-family: ${({ fontFamily, theme }) => (fontFamily ? fontFamily : theme.fontFamily)};
	outline: none;
	padding: 0;
	margin: 0;
`;

export const Text = styled.p`
	${base}
`;

const ButtonBase = css`
	display: flex;
	align-items: center;
	justify-content: center;
	/* width: ${({ w }) => (w ? w : '100px')}; */
`;

export const Button = styled.button`
	${base}
	${ButtonBase}
	padding: ${({ pad }) => (pad ? pad : '10px')};
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
	padding: ${({ pad }) => (pad ? pad : '10px')};
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

const FlexContainerBase = css`
	display: flex;

	align-items: ${({ aCenter, aLeft, aRight }) => {
		switch (true) {
			case aCenter:
				return 'center';
			case aLeft:
				return 'flex-start';
			case aRight:
				return 'flex-end';
			default:
				return 'flex-start';
		}
	}};

	justify-content: ${({ jCenter, jLeft, jRight, jBetween, jAround, jEvenly }) => {
		switch (true) {
			case jCenter:
				return 'center';
			case jLeft:
				return 'flex-start';
			case jRight:
				return 'flex-end';
			case jBetween:
				return 'space-between';
			case jAround:
				return 'space-around';
			case jEvenly:
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

	width: ${({ full, half, width }) => {
		if (width) return width;
		switch (true) {
			case full:
				return '100%';
			case half:
				return '50%';
			default:
				return '100%';
		}
	}};

	height: ${({ full, half, height }) => {
		if (height) return height;
		switch (true) {
			case full:
				return '100%';
			case half:
				return '50%';
			default:
				return '100%';
		}
	}};

	flex-wrap: ${({ wrap }) => (wrap ? wrap : 'none')};
`;

export const FlexContainer = styled.div`
	${FlexContainerBase}
`;

export const Box = styled.div`
	width: ${({ width }) => (width ? width : '50%')};
	height: ${({ height }) => (height ? height : '50%')};
	background-color: ${({ color }) => (color ? color : '#e6e6e6')};
	padding: ${({ padding }) => (padding ? padding : '0')};
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
	background-image: url(${({ img }) => img});
	background-position: center;
`;

export const InputBox = styled.input`
	${base}
	border: none;
	padding: ${({ padding }) => (padding ? padding : '10px')};
	padding-left: 0;
	outline: none;
	border-radius: ${({ radius }) => (radius ? radius : '3px')};
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
	color: ${({ color }) => (color ? color : '#787878')};
	width: ${({ w }) => (w ? w : '100%')};
`;

export const Jumbotron = styled(FlexContainer)`
	background-color: ${({ color }) => (color ? color : 'none')};
	background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
		url(${(props) => props.img});
	background-position: center;
	background-blend-mode: darken;
	:after {
		background: rgba(0, 0, 0, 0.5);
	}
	width: 100vw;
	height: ${({ h }) => (h ? h : '40vh')};
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

export const Link = styled(RouterLink)`
	${base}
	text-decoration: none;
	padding: ${({ padding }) => (padding ? padding : '5px')};
	:hover {
		color: ${({ hoverColor }) => (hoverColor ? hoverColor : '#d1d1d1')};
		text-decoration: none;
	}
	color: ${({ color, blue, white, black }) => {
		switch (true) {
			case color:
				return color;
			case blue:
				return '#34aeeb';
			case white:
				return 'white';
			case black:
				return 'black';
			default:
				return 'white';
		}
	}};
`;

export const Bar = styled(Box)`
	${FlexContainerBase}
	border: none;
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

export const Container = styled.div`
	display: flex;
	width: ${({ width }) => (width ? width : '90%')};
	margin: auto;
	//align-items: center;
`;

export const Image = styled.img`
	height: ${({ h }) => (h ? h : '30px')};
	width: ${({ w }) => (w ? w : '30px')};
	border: ${({ border }) => (border ? '1px solid #c4c4c4' : 'none')};
`;

export const Header = styled.h1`
	${base};
	border-bottom: ${({ softUnderline, boldUnderline }) => {
		switch (true) {
			case softUnderline:
				return '1px solid  #c6c6c6';
			case boldUnderline:
				return '1px solid  #393939';
			default:
				return 'none';
		}
	}};
`;

export const BackgroundImage = styled.div`
	/* ${Box} */
	background-image: url(${(props) => props.img});
`;
