import React, { useState } from 'react';
import PhotoListDetail from './PhotoListDetail';
import LightBox from '../LightBox/LightBox';
import { createUseStyles } from 'react-jss';

const maxWidth = 700;
const useStyles = createUseStyles({
	grid: {
		display: 'grid',
		gridTemplateColumns: 'repeat( auto-fill, minmax(250px, 1fr) )',
		gridGap: '10px',
	},
});

const PhotoList = ({ images }) => {
	const classes = useStyles();
	const [imageToShow, setImageToShow] = useState('');
	const [lightboxDisplay, setLightBoxDisplay] = useState(false);

	const showImage = (image) => {
		setImageToShow(image);
		setLightBoxDisplay(true);
	};

	const hideLightBox = () => {
		setLightBoxDisplay(false);
	};

	return (
		<div className={classes.grid}>
			{images.length > 0
				? images.map((image, index) => <PhotoListDetail key={index} showImage={showImage} image={image} />)
				: []}
			{lightboxDisplay ? (
				<LightBox
					imageToShow={imageToShow}
					setImageToShow={setImageToShow}
					hideLightBox={hideLightBox}
					images={images}
				/>
			) : (
				''
			)}
		</div>
	);
};

export default PhotoList;
