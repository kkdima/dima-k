import React from 'react';
import Layout from '../components/layout';
import Projects from '../components/home/projects.js';
import Technologies from '../components/home/technologies.js';
import AboutMe from '../components/home/aboutMe.js';
import ContactMe from '../components/home/contactMe.js';
import Form from '../components/home/form.js';
import { motion, AnimatePresence } from 'framer-motion';
import {
	stagger,
	fadeInUp
} from '../public/styles/framer_animation/animations';

const ID = () =>
	'_' +
	Math.random()
		.toString(36)
		.substr(2, 9);

const Index = () => {
	return (
		<Layout>
			<AnimatePresence exitBeforeEnter>
				<motion.div
					exit='exit'
					key={ID()}
					variants={fadeInUp}
					initial='initial'
					animate='animate'
					className='flex flex-col sm:w-5/6 m-auto mt-20 w-body-max'
				>
					<motion.div className='flex flex-col-reverse md:flex-row mb-20'>
						<motion.div
							key='wrapper'
							variants={stagger}
							className='pl-6 leading-tight text-3xl mt-6 md:mr-10 text-xl'
						>
							<motion.p variants={fadeInUp}>Hi, my name is</motion.p>
							<motion.h1 variants={fadeInUp} className='ml:text-5xl-custom font-bold'>
								Dima Kononenko
							</motion.h1>
							<motion.p variants={fadeInUp} className=''>
								I'm a
							</motion.p>
							<motion.h1 variants={fadeInUp} className='ml:text-5xl-custom font-bold'>
								web developer.
							</motion.h1>
						</motion.div>
						<motion.div variants={fadeInUp} className='m-auto md:m-0'>
							<img
								src='/images/User-pic-emoji.png'
								className='object-contain'
								alt=''
							/>
						</motion.div>
					</motion.div>

					<AboutMe />

					<div className='flex flex-col md:flex-row justify-between mt-10'>
						<div className='mb-10 max-w-full md:w-1/2 md:mb-0 md:mr-3 p-0 '>
							<Projects />
						</div>
						<div className='flex flex-col md:w-1/2 md:ml-3'>
							<div className='mb-10 max-w-full md:max-width-465'>
								<Technologies />
							</div>
							<div className='max-w-full md:max-width-465'>
								<ContactMe />
							</div>
						</div>
					</div>
					<Form />
				</motion.div>
			</AnimatePresence>
		</Layout>
	);
};

export default Index;
