import React from 'react';
import { createUseStyles } from 'react-jss';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import placeholderImage from '../../shared/assets/images/grey-square-placeholder.svg';

const useStyles = createUseStyles({
	image: { objectFit: 'cover', cursor: 'pointer' },
});

const PhotoListDetail = ({ image, showImage }) => {
	const classes = useStyles();

	if (!image.urls.small) {
		return (
			<div>
				<span>No images yet</span>
			</div>
		);
	}

	return (
		<LazyLoadImage
			effect="blur"
			className={classes.image}
			onClick={() => showImage(image)}
			src={image.urls.small + '&auto=format'}
			alt={image.alt_description}
			style={{ width: '100%', height: '250px' }}
			placeholderSrc={placeholderImage}
		/>
	);
};

export default PhotoListDetail;
