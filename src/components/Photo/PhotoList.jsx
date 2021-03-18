import React from 'react';

const PhotoList = ({ images }) => {
	return (
		<div>
			{images.length > 0
				? images.map((image) => (
						<img key={image.id} src={image.urls.small} alt={image.description} />
				  ))
				: []}
		</div>
	);
};

export default PhotoList;
