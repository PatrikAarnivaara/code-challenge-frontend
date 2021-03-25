import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	lightboxImg: {
		height: '80vh',
		maxWidth: '90vw',
		objectFit: 'cover',
	},
});

function LightBoxImage({ regular, description }) {
	const classes = useStyles();
	return <img className={classes.lightboxImg} src={regular} alt={description}></img>;
}
export default LightBoxImage;
