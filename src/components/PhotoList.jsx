import React from 'react';

const PhotoList = ({ images }) => {
	return (
		<div>
			{images.length > 0 ? images.map((image) => <img src={image.urls.small} alt={image.alt_description} />) : []}
		</div>
	);
};

export default PhotoList;