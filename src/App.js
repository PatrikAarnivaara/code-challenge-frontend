import React, { useEffect } from 'react';
import unsplash from './api/unsplash';

function App() {
	useEffect(() => {
		const getPhotosUnsplash = async () => {
			const response = await unsplash.get('photos');
			console.log(response);
		};
		getPhotosUnsplash();
	}, []);

	return <div></div>;
}

export default App;
