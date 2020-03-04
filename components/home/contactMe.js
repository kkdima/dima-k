import React from 'react';
import { motion } from 'framer-motion';
import { stagger, fadeInUp } from '../../public/styles/framer_animation/animations';

const ContactMe = () => {
	return (
		<motion.div
			exit={{ opacity: 0, y: -60 }}
			variants={fadeInUp}
			initial='initial'
			animate='animate'
			className='rounded container-custom relative overflow-hidden min-h-contactme flex flex-col'
		>
			<div className=''>
				<h2 className='text-4xl font-bold mb-4'>Contact Me</h2>
				<p className='paragraph'>
					+1 (213) 332 83 98 <br />
					kkdimaa@gmail.com
				</p>
			</div>
			<img
				src='/images/Union.svg'
				className='absolute bottom-0 left-0 h-64'
				alt=''
			/>
			<div className='ml-25 mt-20'>
				<p className='font-bold text-3xl'>Los Angeles</p>
				<img src='/images/geo-pin.svg' className='ml-10' alt='' />
			</div>
		</motion.div>
	);
};

export default ContactMe;
