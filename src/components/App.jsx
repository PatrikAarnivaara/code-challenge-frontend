import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import ClipLoader from "react-spinners/ClipLoader";
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
				setImages([...images, ...response.data]);
				setIsLoaded(true);
			}
		} catch (error) {
			console.log(error);
			/* add message to client */
		}
	};

	useEffect(() => {
		getPhotosFromUnsplash();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className={classes.container}>
			<ClipLoader/>
			<InfiniteScroll
				pageStart={0}
				loadMore={getPhotosFromUnsplash}
				hasMore={true || false}
				loader={<ClipLoader key={0} />}
			>
				{loaded ? <Photo images={images} /> : ''}
			</InfiniteScroll>
		</div>
	);
}

export default App;
