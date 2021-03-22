import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({ image: { width: '300px', height: 'auto' } });

const PhotoListDetail = ({ urls, description }) => {
	const classes = useStyles();
	const renderDetail = () => {
		return <img className={classes.image} src={urls} alt={description} loading="lazy" />;
	};
	/* TODO: spinner if no image data */
	if (urls) {
		return renderDetail();
	} else {
		return <span>No images yet</span>;
	}
};

export default PhotoListDetail;
