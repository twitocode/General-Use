import styled, { css } from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

const base = css`
	font-size: ${({ sm, md, lg, size }: any) => {
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

	font-weight: ${({ light, regular, bold, weight }: any) => {
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

	color: ${({ white, black, color, theme }: any) => {
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

	font-family: ${({ fontFamily, theme }: any) =>
		fontFamily ? fontFamily : theme.fontFamily};
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
`;

export const Button = styled.button`
	${base}
	${ButtonBase}
	padding: ${({ pad }: any) => (pad ? pad : '10px')};
	color: ${({ fontColor }: any) => (fontColor ? fontColor : 'white')};
	background-color: ${({ bgColor }: any) => (bgColor ? bgColor : '#363636')};
	border: transparent;
	border-radius: ${({ radius }: any) => (radius ? radius : '5px')};
	:active {
		border: ${({ borderColor }: any) =>
			borderColor ? `2px solid ${borderColor}` : '2px solid #616161'};
		margin: -2px;
	}
`;

export const OutlinedButton = styled.button`
	${base}
	padding: ${({ pad }: any) => (pad ? pad : '10px')};
	background: transparent;
	border: ${({ color }) => (color ? `1px solid ${color}` : '0.1px solid white')};

	border-radius: ${({ radius }: any) => (radius ? radius : '3px')};
	color: ${({ color }) => (color ? color : 'white')};
	box-shadow: none;

	:hover {
		transition: 0.3s all;
		background-color: ${({ hoverBGColor }: any) =>
			hoverBGColor ? hoverBGColor : 'white'};
		color: ${({ hoverTextColor }: any) => (hoverTextColor ? hoverTextColor : 'black')};
	}
`;

const FlexContainerBase = css`
	display: flex;

	align-items: ${({ aCenter, aLeft, aRight }: any) => {
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

	justify-content: ${({ jCenter, jLeft, jRight, jBetween, jAround, jEvenly }: any) => {
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

	flex-direction: ${({ row, col }: any) => {
		switch (true) {
			case row:
				return 'row';
			case col:
				return 'column';
			default:
				return 'row';
		}
	}};

	flex: ${({ flex }: any) => (flex ? flex : '1')};

	width: ${({ full, half, w }: any) => {
		if (w) return w;
		switch (true) {
			case full:
				return '100%';
			case half:
				return '50%';
			default:
				return '100%';
		}
	}};

	height: ${({ full, half, h }: any) => {
		if (h) return h;
		switch (true) {
			case full:
				return '100%';
			case half:
				return '50%';
			default:
				return '100%';
		}
	}};

	flex-wrap: ${({ wrap }: any) => (wrap ? wrap : 'none')};
`;

export const FlexContainer = styled.div`
	${FlexContainerBase}
`;

export const Box = styled.div`
	width: ${({ w }: any) => (w ? w : '50%')};
	height: ${({ h }: any) => (h ? h : '50%')};
	background-color: ${({ color }) => (color ? color : '#e6e6e6')};
	padding: ${({ pad }: any) => (pad ? pad : '0')};
	border: ${({ boldBorder, softBorder }: any) => {
		switch (true) {
			case boldBorder:
				return '1px solid #333333';
			case softBorder:
				return '1px solid #e0e0e0';
			default:
				return 'none';
		}
	}};
	background-image: url(${({ img }: any) => img});
	background-position: center;
`;

export const InputBox = styled.input`
	${base}
	border: none;
	padding: ${({ pad }: any) => (pad ? pad : '10px')};
	padding-left: 0;
	outline: none;
	border-radius: ${({ radius }: any) => (radius ? radius : '3px')};
	border-bottom: ${({ boldBorder, softBorder }: any) => {
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
	width: ${({ w }: any) => (w ? w : '100%')};
`;

export const Jumbotron = styled(FlexContainer)`
	background-color: ${({ color }) => (color ? color : 'none')};
	background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
		url(${(props: any) => props.img});
	background-position: center;
	background-blend-mode: darken;
	:after {
		background: rgba(0, 0, 0, 0.5);
	}
	width: 100vw;
	height: ${({ h }: any) => (h ? h : '40vh')};
	border-bottom: ${({ bBorder, sBorder }: any) => {
		switch (true) {
			case bBorder:
				return '1px solid #333333';
			case sBorder:
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
	padding: ${({ pad }) => (pad ? pad : '5px')};
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
	border-bottom: ${({ bBorder, sBorder }: any) => {
		switch (true) {
			case bBorder:
				return '1px solid #333333';
			case sBorder:
				return '1px solid #e0e0e0';
			default:
				return 'none';
		}
	}};
`;

export const Container = styled.div`
	display: flex;
	width: ${({ w }: any) => (w ? w : '90%')};
	margin: auto;
	//align-items: center;
`;

export const Image = styled.img`
	height: ${({ h }: any) => (h ? h : '30px')};
	width: ${({ w }: any) => (w ? w : '30px')};
	border: ${({ border }: any) => (border ? '1px solid #c4c4c4' : 'none')};
`;

export const Header = styled.h1`
	${base};
	border-bottom: ${({ sUnderline, bUnderline }: any) => {
		switch (true) {
			case sUnderline:
				return '1px solid  #c6c6c6';
			case bUnderline:
				return '1px solid  #393939';
			default:
				return 'none';
		}
	}};
`;

export const BackgroundImage = styled.div`
	/* ${Box} */
	background-image: url(${(props: any) => props.img});
`;
