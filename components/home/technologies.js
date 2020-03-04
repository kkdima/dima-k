import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../public/styles/framer_animation/animations';

const Technologies = () => {
	return (
		<motion.div
			exit={{ opacity: 0, y: -60 }}
			variants={fadeInUp}
			initial='initial'
			animate='animate'
			className='rounded container-custom md:pb-6'
			id='technologies'
		>
			<h2 className='text-4xl font-bold mb-6'>Technologies</h2>
			<p className='paragraph mb-5'>
				This is the fraction of the stack that I used to work with. But not limited
				to.
			</p>
			<div className='flex justify-center md:justify-start relative'>
				<img src='/images/Logos.svg' className='-ml-12 md:ml-0' alt='' />
			</div>
		</motion.div>
	);
};

export default Technologies;
