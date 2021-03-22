import React, { useEffect, useState } from 'react';
import unsplash from '../api/unsplash';
import Photo from './Photo/Photo';
import { createUseStyles } from 'react-jss';

/* const maxWidth = 600; */
const useStyles = createUseStyles({
	container: {
		margin: 'auto',
		padding: '2em'
	},
	/* [`@media (max-width: ${maxWidth}px)`]: {
		container: {
			width: '100%',
			padding: '1em'
		},
	}, */
});

function App() {
	const classes = useStyles();
	const [images, setImages] = useState([]);

	const getPhotosFromUnsplash = async () => {
		try {
			const response = await unsplash.get('photos');
			if (response.status === 200) {
				setImages(response.data);
				console.log(response.data);
			}
		} catch (error) {
			console.log(error);
			/* add message to client */
		}
	};

	useEffect(() => {
		getPhotosFromUnsplash();
	}, []);

	return (
		<div className={classes.container}>
			<Photo images={images} />
		</div>
	);
}

export default App;
