import React from 'react';
import { CapitalizeFirstLetter } from '../utilities/CapitalizeFirstLetter';
import dayjs from 'dayjs';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	overlay: {
		position: 'absolute',
		bottom: '0',
		background: 'rgba(0, 0, 0, 0.5)',
		color: 'white',
		width: '50%',
		transition: '.5s ease',
		opacity: '0',
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
	let year = dayjs(imageMetaData.created_at).format('YYYY');
	return (
		<div className={classes.overlay}>
			<span>
				<span className={classes.name}>{imageMetaData.user.name}</span>,{' '}
				{imageMetaData.user.location ? CapitalizeFirstLetter(imageMetaData.user.location) : 'No location found'}
				, {year}
			</span>
		</div>
	);
};

export default Overlay;
