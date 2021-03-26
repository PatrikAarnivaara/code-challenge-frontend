import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	close: {
		color: 'white',
		position: 'absolute',
		top: '10px',
		right: '25px',
		fontSize: '35px',
		fontWeight: 'bold',
		opacity: '0.8',
		'&:hover': {
			color: '#999',
			textDecoration: 'none',
			cursor: 'pointer',
		},
	},
});

const CloseButton = ({ handleClose }) => {
	const classes = useStyles();
	return (
		<div className={classes.close}>
			<span onClick={handleClose}>&times;</span>
		</div>
	);
};

export default CloseButton;
