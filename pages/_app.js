require('../public/styles/index.css');
import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

const MyApp = ({ Component, pageProps }) => {
	const router = useRouter();
	return (
		<>
			<AnimatePresence exitBeforeEnter>
				<Component {...pageProps} key={router.asPath} />
			</AnimatePresence>
		</>
	);
};

export default MyApp;
