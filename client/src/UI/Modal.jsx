import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	modal: {
		zIndex: '1',
		position: 'fixed',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		backgroundColor: 'rgba(255, 255, 255, 0.5)',
		display: 'grid',
		gridTemplateColumns: 'repeat(3, 1fr)',
		gridGap: '1em',
		alignItems: 'center',
		justifyItems: 'center',
	},
});

const Modal = ({ content, handleClose }) => {
    console.log(content)
	const classes = useStyles();
	return (
		<div onClick={handleClose} className={classes.modal}>
			{content}
		</div>
	);
};

export default Modal;
