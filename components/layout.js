import React from 'react';
import Nav from './home/nav';
import { motion, AnimatePresence } from 'framer-motion';

const Layout = props => (
	<>
		<Nav />
		{props.children}
	</>
);

export default Layout;
