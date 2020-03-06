require('../public/styles/index.css');
import React, { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import reactGA from 'react-ga';
import { initGA, logPageView } from '../lib/gtag';
import Router from 'next/router';

const ID = () =>
	'_' +
	Math.random()
		.toString(36)
		.substr(2, 9);

const MyApp = ({ Component, pageProps }) => {
	
	useEffect(() => {
		if (!window.GA_INITIALIZED) {
			initGA();
			window.GA_INITIALIZED = true;
		}
		logPageView();
	}, []);

	return (
		<>
			<AnimatePresence exitBeforeEnter>
				<Component {...pageProps} key={ID()} />
			</AnimatePresence>
		</>
	);
};

export default MyApp;
