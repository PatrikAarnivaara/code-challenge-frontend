import React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import testImage from '../../../assets/test.jpeg';
import PhotoListDetail from './PhotoListDetail';

describe('Expect PhotoListDetail to', () => {
	test('render No images yet if no props', () => {
		const component = shallow(<PhotoListDetail />);
		expect(component.text()).toBe('No images yet');
	});

	test('uses the correct src', () => {
		const { getByAltText } = render(<PhotoListDetail urls={testImage} description="light bulb" />);
		const image = getByAltText('light bulb');
		expect(image.src).toContain(testImage);
	});
});
