import React, { useEffect, useState } from 'react';
import unsplash from '../api/unsplash';
import Photo from './Photo/Photo';

function App() {
	const [images, setImages] = useState([]);

	const getPhotosFromUnsplash = async () => {
		try {
			const response = await unsplash.get('photos');
			if (response.status === 200) {
				setImages(response.data);
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
		<div>
			<Photo images={images} />
		</div>
	);
}

export default App;
