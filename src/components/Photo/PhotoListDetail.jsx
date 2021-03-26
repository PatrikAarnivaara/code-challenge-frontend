import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	image: { objectFit: 'cover', cursor: 'pointer' },
});

const PhotoListDetail = ({ image, showImage }) => {
	const classes = useStyles();
	const { urls, description } = image;

	const renderImageDetail = () => {
		return (
			<img
				className={classes.image}
				onClick={() => showImage(image)}
				src={urls.small}
				alt={description}
				style={{ width: '100%', height: '15.625rem' }}
			/>
		);
	};
	if (image.urls.small) {
		return renderImageDetail();
	} else {
		return <span>No images yet</span>;
	}
};

export default PhotoListDetail;
