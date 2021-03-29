import React, { useState } from 'react';
import { CapitalizeFirstLetter } from '../../utilities/CapitalizeFirstLetter';
import info from '../../assets/info.svg';
import dayjs from 'dayjs';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	overlay: {
		color: 'white',
		fontSize: '1rem',
		padding: '1em',
		cursor: 'pointer',
	},
	button: {
		backgroundColor: 'Transparent',
		border: 'none',
		outline: 'none',
		fontSize: '2rem',
		cursor: 'pointer',
	},
	content: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		background: 'rgba(0, 0, 0, 0.5)',
		padding: '0.5em',
		textDecoration: 'none',
	},
});

const PhotoInfo = ({ imageMetaData }) => {
	const classes = useStyles();
	const [metaData, setMetaData] = useState(false);
	const year = dayjs(imageMetaData.created_at).format('YYYY');

	return (
		<div>
			<div className={classes.overlay}>
				<button
					className={classes.button}
					onClick={() => {
						setMetaData(true);
					}}
				>
					{!metaData ? <img src={info} alt="info icon" /> : ''}
				</button>
				{metaData ? (
					<section
						className={classes.content}
						onClick={() => {
							setMetaData(false);
						}}
					>
						<span>{imageMetaData.user.name}</span>
						<span>
							{imageMetaData.user.location
								? CapitalizeFirstLetter(imageMetaData.user.location)
								: 'No location found'}
						</span>
						<span>{year}</span>
					</section>
				) : (
					''
				)}
			</div>
		</div>
	);
};

export default PhotoInfo;
