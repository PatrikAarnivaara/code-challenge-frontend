import React from 'react';
import ArrowButton from '../../UI/ArrowButton';
import LightBoxImage from '../../UI/LightBoxImage';
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
		display: 'grid',
		gridTemplateColumns: 'repeat(3, 1fr)',
		gridGap: '1em',
		alignItems: 'center',
		justifyItems: 'center',
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
			<ArrowButton handleClick={showPrevImage} degree="rotate(135deg)" />
			<LightBoxImage regular={imageToShow.urls.regular} description={imageToShow.description}></LightBoxImage>
			<ArrowButton handleClick={showNextImage} degree="rotate(-45deg)" />
		</div>
	);
};

export default LightBox;
