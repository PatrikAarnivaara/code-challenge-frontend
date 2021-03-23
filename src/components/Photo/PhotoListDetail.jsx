import React from 'react';
/* import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	image: {},
}); */

const PhotoListDetail = ({ image, showImage }) => {
	/* 	const classes = useStyles(); */
	/* const { urls, description } = image; */

	const renderDetail = () => {
		return (
			<img
				/* className={classes.image} */
				onClick={() => showImage(image)}
				src={image.urls.regular}
				alt={image.description}
				loading="lazy"
				style={{ width: '100%', height: '100%', objectFit: 'cover', cursor: 'pointer' }}
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
