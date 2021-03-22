import unsplash from './unsplash';

describe('The Unsplash API', () => {
	const expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;
	const regexURL = new RegExp(expression);
	const expected = {
		full: expect.stringMatching(regexURL),
		raw: expect.stringMatching(regexURL),
		regular: expect.stringMatching(regexURL),
		small: expect.stringMatching(regexURL),
		thumb: expect.stringMatching(regexURL),
	};

	test('returns an array of images', async () => {
		const response = await unsplash.get('photos');
		expect(response.data).toHaveLength(20);
	});

	test('which should contain the properties id and urls,', async () => {
		const response = await unsplash.get('photos');
		response.data.forEach((element) => {
			expect(element).toHaveProperty('id');
			expect(element).toHaveProperty('urls');
		});
	});

	test('the urls should be correct', async () => {
		const response = await unsplash.get('photos');
		for (let i = 0; i < response.data.length; i++) {
			expect(response.data[i].urls).toEqual(expect.objectContaining(expected));
		}
	});

	test('and if the API call fails it should throw and error.', async () => {
		expect.assertions();
		try {
			await unsplash.get('photos');
		} catch (e) {
			expect(e).toMatch('error');
		}
	});
});
