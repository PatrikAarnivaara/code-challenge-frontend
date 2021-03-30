import React from 'react';
import ReactDOMServer from 'react-dom';
import './index.css';
import App from './components/App';

ReactDOMServer.renderToNodeStream(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
