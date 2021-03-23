import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	image: { objectFit: 'cover', cursor: 'pointer' },
});

const PhotoListDetail = ({ image, showImage }) => {
	const classes = useStyles();
	const { urls, description } = image;

	const renderDetail = () => {
		return (
			<img
				className={classes.image}
				onClick={() => showImage(image)}
				src={urls.regular}
				alt={description}
				loading="lazy"
				style={{ width: '100%', height: '100%' }}
			/>
		);
	};
	/* TODO: spinner if no image data */
	if (image.urls) {
		return renderDetail();
	} else {
		return <span>No images yet</span>;
	}
};

export default PhotoListDetail;
