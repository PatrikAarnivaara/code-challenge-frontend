import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	close: {
		color: '#666',
		position: 'absolute',
		top: '10px',
		right: '25px',
		fontSize: '35px',
		fontWeight: 'bold',
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
