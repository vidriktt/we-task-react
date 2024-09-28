import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

window.addEventListener('DOMContentLoaded', () => {
	const setVw = () => {
		const vw = document.documentElement.clientWidth / 100;
		document.documentElement.style.setProperty('--vw', `${vw}px`);
	};

	setVw();
	window.addEventListener('resize', setVw);
});
