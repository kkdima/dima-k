import { motion, AnimatePresence } from 'framer-motion';
import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import {
	stagger,
	fadeInUp
} from '../../public/styles/framer_animation/animations';
import projects from '../../public/data/projects.json';
import Carousel from '../../components/projects/carousel';
import images from '../../public/data/images.json';

const ButtonBack = () => (
	<div className='flex-col al'>
		<Link href='/'>
			<motion.button
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9, y: '5px' }}
				className='px-3 p-1 rounded bg-blue-c flex mb-8'
			>
				<motion.img
					src='/images/arrow-back.svg'
					className='pr-2 rounded py-1 bg-blue-c'
					alt=''
				/>
				Home
			</motion.button>
		</Link>
	</div>
);

const Project = props => {
	const [width, setWidth] = useState(0);
	const {
		name,
		description,
		link,
		technology1,
		technology2,
		technology3,
		about_tech1,
		about_tech2,
		about_tech3
	} = props.project;

	useEffect(() => {
		const resizeListener = () => {
			setWidth(window.innerWidth);
		};
		resizeListener();
		window.addEventListener('resize', resizeListener);
		return () => {
			window.removeEventListener('resize', resizeListener);
		};
	}, [width]);

	return (
		<motion.div
			exit={{ opacity: 0 }}
			variants={fadeInUp}
			initial='initial'
			animate='animate'
			className='md:flex'
		>
			<motion.div className='bg-white md:bg-appleGrey h-screen justify-start overflow-x-hidden flex-col md:w-1/2'>
				<motion.div
					variants={stagger}
					className='py-12 px-6 fl:px-12 ad:px-0 m-auto ad:max-w-3/4'
				>
					<ButtonBack />
					<motion.div className='flex align-bottom' variants={fadeInUp}>
						<h1 className='text-4xl mt-12 font-bold mb-3'>{name}</h1>
						<a href={link} className='pt-12 pl-3'>
							<motion.img
								src='/images/link.svg'
								initial={{ scale: 0.8 }}
								whileHover={{ scale: 1 }}
								whileTap={{ scale: 0.9, y: '5px' }}
								alt='link'
							/>
						</a>
					</motion.div>
					<motion.p variants={fadeInUp} className='paragraph'>
						{description}
					</motion.p>
				</motion.div>

				{width < 768 ? <Carousel /> : null}

				<motion.div
					variants={stagger}
					className='p-6 fl:px-12 ad:px-0 m-auto ad:max-w-3/4'
				>
					<motion.h2 className='text-2xl'>Tech Stack:</motion.h2>
					<motion.p variants={fadeInUp}>
						<span className='font-bold'>{technology1}</span> – {about_tech1} <br />
						<span className='font-bold'>{technology2}</span> – {about_tech2} <br />
						<span className='font-bold'>{technology3}</span> – {about_tech3} <br />
					</motion.p>
				</motion.div>
			</motion.div>
			<div className='md:w-1/2 relative px-3 pt-48 fl:px-12 md:px-0 ad:max-w-3/4 hidden md:block'>
				{width > 768 ? <Carousel /> : null}
			</div>
		</motion.div>
	);
};

Project.getInitialProps = async ({ query }) => {
	return {
		project: projects[query.project]
	};
};

export default Project;
