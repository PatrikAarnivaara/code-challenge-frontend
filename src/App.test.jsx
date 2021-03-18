import unsplash from './api/unsplash';

const imageData = {
	full: expect.any(String),
	raw: expect.any(String),
	regular: expect.any(String),
	small: expect.any(String),
	thumb: expect.any(String),
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
		expect(response.data[i].urls).toEqual(imageData);
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

