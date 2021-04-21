import React, { useEffect, useState } from 'react';
import Photo from './Photo/Photo';
import GridLoader from 'react-spinners/GridLoader';
import unsplash from '../shared/api/unsplash';
import { createUseStyles } from 'react-jss';
import { css } from '@emotion/react';
import loadable from '@loadable/component';

const InfiniteScroll = loadable(() => import('react-infinite-scroller'));

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

const App = () => {
	const classes = useStyles();
	const [page, setPage] = useState(1);
	const [images, setImages] = useState([]);
	const [loaded, setIsLoaded] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	const getPhotosFromUnsplash = () => {
		/* search/photos?c&query=""&page=${page}` */
		try {
			unsplash.get(`photos?page${page}`).then((response) => {
				if (response.status === 200) {
					setImages([...images, ...response.data]);
					setIsLoaded(true);
					setPage(page + 1);
					console.log(page)
					if (errorMessage !== '') {
						setErrorMessage('');
					}
				}
			});
		} catch (error) {
			setErrorMessage('Something went wrong while trying to fetch images from Unsplash');
		}
	};

	useEffect(() => {
		getPhotosFromUnsplash();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (!images) {
		return <GridLoader />;
	}

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

			<h3>{errorMessage}</h3>
		</div>
	);
};

export default App;
