require('../public/styles/index.css');
import React from 'react';
import { AnimatePresence } from 'framer-motion';

const MyApp = ({ Component, pageProps, router }) => (
	<>
		<AnimatePresence exitBeforeEnter>
			<Component {...pageProps} key={router.route} />
		</AnimatePresence>
	</>
);

export default MyApp;
