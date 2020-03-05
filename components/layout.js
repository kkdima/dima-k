import React, { useEffect } from 'react';
import Nav from './home/nav';
import { motion, AnimatePresence } from 'framer-motion';

const Layout = props => {
	return (
		<>
			<Nav />
			{props.children}
		</>
	);
};

export default Layout;
