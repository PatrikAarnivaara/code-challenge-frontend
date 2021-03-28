import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	image: { objectFit: 'cover', cursor: 'pointer' },
});

const PhotoListDetail = ({ image, showImage }) => {
	const classes = useStyles();
	const { urls, description } = image;
	console.log(urls.small + '&auto=format');

	const renderImageDetail = () => {
		return (
			<img
				className={classes.image}
				onClick={() => showImage(image)}
				src={urls.small + '&auto=format'}
				alt={description}
				style={{ width: '100%', height: '250px' }}
			/>
		);
	};
	if (image.urls.regular) {
		return renderImageDetail();
	} else {
		return <span>No images yet</span>;
	}
};

export default PhotoListDetail;