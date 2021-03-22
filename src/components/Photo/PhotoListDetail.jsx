import React from 'react';
import LazyLoad from 'react-lazyload';

const PhotoListDetail = ({ urls, description }) => {
	const renderDetail = () => {
		return (
			<div>
				<LazyLoad>
					<img src={urls} alt={description} />
				</LazyLoad>
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
