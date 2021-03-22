import React from 'react';
import PhotoListDetail from './PhotoListDetail';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	container: {
		width: "90%",
		display: 'grid',
		gridTemplateColumns: 'repeat(4, 1fr)',
		gap: '1em',
		gridAutoRows: 'minmax(100px, auto)',
	},
});

const PhotoList = ({ images }) => {
	const classes = useStyles();
	return (
		<div className={classes.container}>
			{images.length > 0
				? images.map((image) => (
						<PhotoListDetail
							className={classes.imageX}
							key={image.id}
							urls={image.urls.raw}
							description={image.description}
						/>
				  ))
				: []}
		</div>
	);
};

export default PhotoList;
