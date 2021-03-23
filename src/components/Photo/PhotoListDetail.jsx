import React from 'react';
/* import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	image: {},
}); */

const PhotoListDetail = ({ urls, description, showImage }) => {
	/* 	const classes = useStyles(); */

	const renderDetail = () => {
		return (
			<img
				/* className={classes.image} */
				onClick={() => showImage(urls)}
				src={urls}
				alt={description}
				loading="lazy"
				style={{ width: '100%', height: '100%', objectFit: 'cover', cursor: 'pointer' }}
			/>
		);
	};
	/* TODO: spinner if no image data */
	if (urls) {
		return renderDetail();
	} else {
		return <span>No images yet</span>;
	}
};

export default PhotoListDetail;
