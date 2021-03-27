import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import GridLoader from 'react-spinners/GridLoader';
import unsplash from '../api/unsplash';
import Photo from './Photo/Photo';
import { createUseStyles } from 'react-jss';
import { css } from '@emotion/react';

const useStyles = createUseStyles({
	container: {
		margin: 'auto',
		padding: '1em',
	},
});

const override = css`
	display: block;
	margin: 0 auto;
`;

function App() {
	const classes = useStyles();
	const [images, setImages] = useState([]);
	const [loaded, setIsLoaded] = useState(false);

	const getPhotosFromUnsplash = async () => {
		try {
			const response = await unsplash.get('photos?auto=format');
			if (response.status === 200) {
				console.log(response.data)
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
			<InfiniteScroll
				pageStart={0}
				loadMore={getPhotosFromUnsplash}
				hasMore={true}
				loader={<GridLoader key={0} css={override} />}
			>
				{loaded ? <Photo images={images} /> : ''}
			</InfiniteScroll>
		</div>
	);
}

export default App;
