import React from 'react';
import { motion } from 'framer-motion';
import {
	stagger,
	fadeInDown
} from '../../public/styles/framer_animation/animations';
import { Link as LinkScroll, animateScroll as scroll } from 'react-scroll';

const Nav = () => (
	<motion.nav
		exit={{ opacity: 0 }}
		variants={fadeInDown}
		initial='initial'
		animate='animate'
		className='m-auto mt-3 w-body-max w-5/6 flex justify-between'
	>
		<motion.div
			className='flex justify-start border-black'
			className='ml-6 mr-10 flex text-xl pt-3 border-0 border-b-4 border-grey'
			variants={fadeInDown}
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.9, y: '5px' }}
		>
			<LinkScroll
				activeClass='active'
				to='#contact-form'
				spy={true}
				smooth={true}
				offset={-70}
				duration={500}
			>
				Get in touch
			</LinkScroll>
		</motion.div>

		<div className='flex links'>
			<motion.a
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9, y: '5px' }}
				href='//github.com/kkdima'
				target='_blank'
			>
				<img src='/images/JamIcons-github.svg' alt='github' className='mt-3' />
			</motion.a>
			<motion.a
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9, y: '5px' }}
				href='//instagram.com/kkdimaa'
				target='_blank'
				id='insta'
			>
				<img src='/images/instagram.svg' alt='github' className='mt-3 ml-6' />
			</motion.a>
		</div>
	</motion.nav>
);

export default Nav;
