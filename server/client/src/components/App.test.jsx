import App from './App';
import { shallow } from 'enzyme'; 

describe('First React component test with Enzyme', () => {
	it('renders without crashing', () => {
	   shallow(<App />);
	 });
 });
