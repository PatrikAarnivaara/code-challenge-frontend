import React from 'react';
import PhotoList from './PhotoList';

const Photo = ({ images }) => {
	return (
		<div>
			<PhotoList images={images} />
		</div>
	);
};

export default Photo;
