import React from 'react';
import PhotoListDetail from './PhotoListDetail';
import { createUseStyles } from 'react-jss';

const maxWidth = 700;
const useStyles = createUseStyles({
	grid: {
		display: 'grid',
		gridTemplateColumns: 'repeat(4, 4fr)',
		gridTemplateRows: 'repeat(20vw)',
		gridGap: '15px',
	},
	[`@media (max-width: ${maxWidth}px)`]: {
		grid: {
			gridTemplateColumns: 'repeat(1, 4fr)',
		},
	},
});

const PhotoList = ({ images }) => {
	const classes = useStyles();
	return (
		<div className={classes.grid}>
			{images.length > 0
				? images.map((image) => (
						<PhotoListDetail key={image.id} urls={image.urls.regular} description={image.description} />
				  ))
				: []}
		</div>
	);
};

export default PhotoList;
