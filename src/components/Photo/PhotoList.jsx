import React from 'react';
import PhotoListDetail from './PhotoListDetail';

const PhotoList = ({ images }) => {
	return (
		<div className="photo-list-wrapper">
			{images.length > 0
				? images.map((image) => (
						<PhotoListDetail 
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
