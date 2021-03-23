import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import unsplash from '../api/unsplash';
import Photo from './Photo/Photo';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	container: {
		margin: 'auto',
		padding: '2em',
	},
});

function App() {
	const classes = useStyles();
	const [images, setImages] = useState([]);
	const [loaded, setIsLoaded] = useState(false);

	const getPhotosFromUnsplash = async () => {
		try {
			const response = await unsplash.get('photos');
			if (response.status === 200) {
				setImages(() => [...images, ...response.data]);
				setIsLoaded(true);
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
			<InfiniteScroll
				dataLength={images}
				next={() => getPhotosFromUnsplash()}
				hasMore={true}
				loader={
					<img
						src="https://res.cloudinary.com/chuloo/image/upload/v1550093026/scotch-logo-gif_jq4tgr.gif"
						alt="loading"
					/>
				}
			>
				{loaded ? <Photo images={images} /> : ''}
			</InfiniteScroll>
		</div>
	);
}

export default App;
