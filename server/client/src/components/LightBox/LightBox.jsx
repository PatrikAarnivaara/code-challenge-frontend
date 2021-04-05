import React from 'react';
import ArrowButton from '../Button/ArrowButton';
import LightBoxImage from './LightBoxImage';
import PhotoInfo from '../Photo/PhotoInfo';
import CloseButton from '../Button/CloseButton';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	lightbox: {
		zIndex: '1',
		position: 'fixed',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		backgroundColor: 'rgba(255, 255, 255, 0.5)',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	controls: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	overlay: {
		position: 'absolute',
		bottom: '10%',
	},
});

const LightBox = ({ imageToShow, setImageToShow, hideLightBox, images }) => {
	const classes = useStyles();

	const showNextImage = (e) => {
		e.stopPropagation();
		let currentIndex = images.indexOf(imageToShow);
		if (currentIndex >= images.length - 1) {
			setImageToShow(images[0]);
		} else {
			let nextImage = images[currentIndex + 1];
			setImageToShow(nextImage);
		}
	};

	const showPrevImage = (e) => {
		e.stopPropagation();
		let currentIndex = images.indexOf(imageToShow);
		if (currentIndex <= 0) {
			setImageToShow(images[images.length - 1]);
		} else {
			let nextImage = images[currentIndex - 1];
			setImageToShow(nextImage);
		}
	};

	return (
		<div className={classes.lightbox}>
			<CloseButton handleClose={hideLightBox} />
			<div className={classes.controls}>
				<ArrowButton handleClick={showPrevImage} degree="rotate(135deg)" percentage="20%" />
				<LightBoxImage regular={imageToShow.urls.regular} description={imageToShow.description} />
				<ArrowButton handleClick={showNextImage} degree="rotate(-45deg)" percentage="20%" />
			</div>
			<div className={classes.overlay}>
				<PhotoInfo imageMetaData={imageToShow} />
			</div>
		</div>
	);
};

export default LightBox;
