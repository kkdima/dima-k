import React from 'react';
import { motion } from 'framer-motion';
import { stagger, fadeInDown } from '../../public/styles/framer_animation/animations';
// import Link from "next/link";

const links = [
	{ href: '', label: 'Get in touch' },
	{ href: '/', label: 'Home' }
].map(link => {
	link.key = `nav-link-${link.href}-${link.label}`;
	return link;
});

const Nav = () => (
	<motion.nav
		exit={{ opacity: 0 }}
		variants={fadeInDown}
		initial='initial'
		animate='animate'
		className='m-auto mt-3 w-body-max w-5/6 flex justify-between'
	>
		<ul className='flex justify-start border-black'>
			{links.map(({ key, href, label }) => (
				<li variants={fadeInDown} key={key}>
					<motion.a
						href={href}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9, y: '5px' }}
						className='mr-10 flex text-xl pt-3 border-0 border-b-4 border-grey'
					>
						{label}
					</motion.a>
				</li>
			))}
		</ul>
		<motion.a
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.9, y: '5px' }}
			href='//github.com/kkdima'
			target='_blank'
		>
			<img src='/images/JamIcons-github.svg' alt='github' className='mt-3' />
		</motion.a>
	</motion.nav>
);

export default Nav;
