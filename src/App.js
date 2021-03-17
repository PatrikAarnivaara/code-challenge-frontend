import React, { useEffect, useState } from 'react';
import unsplash from './api/unsplash';
import Photo from '../src/components/Photo';

function App() {
	const [images, setImages] = useState([]);

	useEffect(() => {
		const getPhotosFromUnsplash = async () => {
			try {
				const response = await unsplash.get('photos');
				if (response.status === 200) {
					setImages(response.data);
				}
			} catch (error) {
				console.log(error);
			}
		};
		getPhotosFromUnsplash();
	}, []);

	return (
		<div>
			<Photo images={images} />
		</div>
	);
}

export default App;
