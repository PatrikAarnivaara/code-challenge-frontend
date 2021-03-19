import unsplash from '../api/unsplash';
import App from './App';
import { shallow } from 'enzyme';

it('should render correctly without no props', () => {
	const component = shallow(<App />);
	expect(component).toMatchSnapshot();
});

describe('checks data from unsplash API', () => {
	const expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;
	const regexURL = new RegExp(expression);
	const expected = {
		full: expect.stringMatching(regexURL),
		raw: expect.stringMatching(regexURL),
		regular: expect.stringMatching(regexURL),
		small: expect.stringMatching(regexURL),
		thumb: expect.stringMatching(regexURL),
	};

	test('check length of array', async () => {
		const response = await unsplash.get('photos');
		expect(response.data).toHaveLength(20);
	});

	test('check that array have properties id and urls', async () => {
		const response = await unsplash.get('photos');
		response.data.forEach((element) => {
			expect(element).toHaveProperty('id');
			expect(element).toHaveProperty('urls');
		});
	});

	test('check if array item contains urls', async () => {
		const response = await unsplash.get('photos');
		for (let i = 0; i < response.data.length; i++) {
			expect(response.data[i].urls).toEqual(expect.objectContaining(expected));
		}
	});

	/* test('the fetch fails with an error', async () => {
	expect.assertions();
	try {
		await unsplash.get('photos');
	} catch (e) {
		expect(e).toMatch('error');
	}
}); */
});
