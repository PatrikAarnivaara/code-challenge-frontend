import React from 'react';
import { CapitalizeFirstLetter } from '../utilities/CapitalizeFirstLetter';
import dayjs from 'dayjs';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	overlay: {
		position: 'absolute',
		bottom: '10%',
		/* background: 'rgba(0, 0, 0, 0.5)', */
		width: '10%',
		color: 'white',
		transition: '.5s ease',
		opacity: 1,
		fontSize: '1rem',
		padding: '1em',
		textAlign: 'center',
		'&:hover': {
			opacity: 1,
		},
	},
	name: {
		fontWeight: 'bold',
	},
});

const Overlay = ({ imageMetaData }) => {
	const classes = useStyles();
	const year = dayjs(imageMetaData.created_at).format('YYYY');
	return (
		<div className={classes.overlay}>
			<p className={classes.name}>{imageMetaData.user.name}</p>{' '}
			<p>
				{imageMetaData.user.location ? CapitalizeFirstLetter(imageMetaData.user.location) : 'No location found'}
			</p>
			<p>{year}</p>
		</div>
	);
};

export default Overlay;
