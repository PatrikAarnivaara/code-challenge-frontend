import React from 'react';
import { createUseStyles } from 'react-jss';
/*  */
const ArrowButton = ({ handleClick, degree, percentage }) => {
	const useStyles = createUseStyles({
		button: {
			cursor: 'pointer',
			width: 'auto',
			backgroundColor: 'Transparent',
			border: 'none',
			padding: '1.2em',
			textAlign: 'center',
			margin: '0 -60px',
			outline: 'none',
			right: percentage,
			zIndex: '1',
		},
		arrow: {
			opacity: 0.8,
			border: 'solid white',
			borderWidth: '0 4px 4px 0',
			display: 'inline-block',
			padding: '10px',
			transform: degree,
			webkitTransform: degree,
		},
	});
	const classes = useStyles();
	return (
		<button className={classes.button} onClick={handleClick}>
			<i className={classes.arrow}></i>
		</button>
	);
};

export default ArrowButton;
