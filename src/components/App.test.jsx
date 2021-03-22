import axios from 'axios';
import App from './App';

jest.mock('axios');

test('xxx', () => {
	const images = [{ url: 'http' }];
	const response = { data: images };
	axios.get.mockResolvedValue(response);

	// axios.get.mockImplementation(() => Promise.resolve(resp))
	return App.getPhotosFromUnsplash().then((data) => expect(data).toEqual(images));
});
