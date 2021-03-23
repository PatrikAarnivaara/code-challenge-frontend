import React, { useState } from 'react';
import PhotoListDetail from './PhotoListDetail';
import { createUseStyles } from 'react-jss';

const maxWidth = 700;
const useStyles = createUseStyles({
	grid: {
		display: 'grid',
		gridTemplateColumns: 'repeat(4, 4fr)',
		gridTemplateRows: 'repeat(4, 30vw)',
		gridGap: '15px',
	},
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
		justifyContent: 'space-between',
	},
	lightboxImg: {
		height: '80vh',
		maxWidth: '90vw',
		objectFit: 'cover',
	},
	[`@media (max-width: ${maxWidth}px)`]: {
		grid: {
			gridTemplateColumns: 'repeat(2, 4fr)',
		},
	},
});

const PhotoList = ({ images }) => {
	const classes = useStyles();
	const [imageToShow, setImageToShow] = useState('');
	const [lightboxDisplay, setLightBoxDisplay] = useState(false);

	const showImage = (image) => {
		console.log('imageToShow:', image);
		setImageToShow(image);
		setLightBoxDisplay(true);
	};

	const hideLightBox = () => {
		setLightBoxDisplay(false);
	};

	const showNextImage = (e) => {
		e.stopPropagation();
		console.log('index ->', images.indexOf(imageToShow));
		/* indexOf does not find image id in array */
		let currentIndex = images.indexOf(imageToShow);
		if (currentIndex >= images.length - 1) {
			setLightBoxDisplay(false);
		} else {
			let nextImage = images[currentIndex + 1];
			console.log(nextImage.urls.regular);
			setImageToShow(nextImage);
		}
	};

	const showPrevImage = (e) => {
		e.stopPropagation();
		let currentIndex = images.indexOf(imageToShow);
		if (currentIndex <= 0) {
			setLightBoxDisplay(false);
		} else {
			let nextImage = images[currentIndex - 1];
			setImageToShow(nextImage);
		}
	};

	return (
		<div className={classes.grid}>
			{images.length > 0
				? images.map((image, index) => <PhotoListDetail key={index} showImage={showImage} image={image} />)
				: []}
			{lightboxDisplay ? (
				<div className={classes.lightbox} onClick={hideLightBox}>
					<button onClick={showPrevImage}>⭠</button>
					<img
						className={classes.lightboxImg}
						src={imageToShow.urls.regular}
						alt={imageToShow.description}
					></img>
					<button onClick={showNextImage}>⭢</button>
				</div>
			) : (
				''
			)}
		</div>
	);
};

export default PhotoList;
