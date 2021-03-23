import React from 'react';
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
		justifyContent: 'space-evenly',
	},
	lightboxImg: {
		height: '80vh',
		maxWidth: '90vw',
		objectFit: 'cover',
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
		<div className={classes.lightbox} onClick={hideLightBox}>
			<button onClick={showPrevImage}>⭠</button>
			<img className={classes.lightboxImg} src={imageToShow.urls.regular} alt={imageToShow.description}></img>
			<button onClick={showNextImage}>⭢</button>
		</div>
	);
};

export default LightBox;
