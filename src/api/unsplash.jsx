import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com/',
	params: { per_page: 30 },
	headers: {
		Authorization: process.env.REACT_APP_UNSPLASH_CLIENT_ID,
	},
});
