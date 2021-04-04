import React, { useEffect, useState, Suspense, lazy } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import GridLoader from 'react-spinners/GridLoader';
import unsplash from '../shared/api/unsplash';
import { createUseStyles } from 'react-jss';
import { css } from '@emotion/react';

const Photo = lazy(() => import('./Photo/Photo'));

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
	const [images, setImages] = useState([]);
	const [loaded, setIsLoaded] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	const getPhotosFromUnsplash = () => {
		try {
			unsplash.get('photos').then((response) => {
				if (response.status === 200) {
					setImages([...images, ...response.data]);
					setIsLoaded(true);
					console.log(response.data);
					if (errorMessage !== '') {
						setErrorMessage('');
					}
				}
			});
		} catch (error) {
			console.log(error);
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
		<Suspense
			fallback={
				<div>
					<GridLoader />
				</div>
			}
		>
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
		</Suspense>
	);
};

export default App;
