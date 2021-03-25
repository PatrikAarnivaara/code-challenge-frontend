import React from 'react';
import { createUseStyles } from 'react-jss';

const ArrowButton = ({ handleClick, degree }) => {
	const useStyles = createUseStyles({
		button: {
			cursor: 'pointer',
			width: 'auto',
			backgroundColor: 'Transparent',
			border: 'none',
			padding: '2em',
			textAlign: 'center',
			margin: '4px',
			opacity: '0.6',
			transition: '0.3s',
			outline: 'none',
		},
		arrow: {
			border: 'solid black',
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
