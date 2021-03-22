import React from 'react';

const PhotoListDetail = ({ urls, description }) => {
	const renderDetail = () => {
		return (
			<div>
				<img src={urls} alt={description} loading="lazy" style={{ width: '500px', height: 'auto' }} />
			</div>
		);
	};

	if (urls) {
		return renderDetail();
	} else {
		return <span>No images yet</span>;
	}
};

export default PhotoListDetail;
