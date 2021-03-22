import React from 'react';
import PhotoListDetail from './PhotoListDetail';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	grid: {
		display: 'grid',
		gridGap: '1em',
		gridTemplateColumns: 'repeat(4, 1fr)',
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
