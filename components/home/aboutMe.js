import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { stagger, fadeInUp } from '../../public/styles/framer_animation/animations';

const AboutMe = () => {
	return (
		<motion.div
			exit={{ opacity: 0, y: -60 }}
			variants={stagger}
			initial='initial'
			animate='animate'
		>
			<motion.div
				initial={{ y: 60, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				className='rounded text-lg container-custom'
			>
				<motion.h2 variants={fadeInUp} className='text-4xl font-bold'>
					About me
				</motion.h2>
				<motion.p variants={fadeInUp} className='paragraph mb-5'>
					More than anything else I strive to create. And things like design serve me
					as great inspirations. I believe that commitment and hard work can overcome
					anything. Thus, my motto is to enjoy the journey and always to learn new
					things.
				</motion.p>
				<motion.div variants={fadeInUp} className='inline-flex'>
					<img src='/images/Ellipse.svg' className='object-contain mr-4' alt='' />
					<p>6+ years of graphic/web design experience</p>
				</motion.div>
				<br />
				<motion.div variants={fadeInUp} className='inline-flex'>
					<img src='/images/Ellipse.svg' className='object-contain mr-4' alt='' />
					<p>Attention to details</p>
				</motion.div>
				<br />
				<motion.div variants={fadeInUp} className='inline-flex'>
					<img src='/images/Ellipse.svg' className='object-contain mr-4' alt='' />
					<p>Fast learner and adapter to the new workflows</p>
				</motion.div>
				<motion.div className='container w-full flex justify-end'>
					<a href='/files/cv.pdf' target='_blank'>
						<motion.button
							// onClick={downloadCV()}
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9, y: '5px' }}
							className='py-1 px-3 rounded flex bg-blue-c'
						>
							open CV
							<img
								src='/images/OpenButton.svg'
								className='w-5 ml-2 mt-1 -mr-1'
								alt=''
							/>
						</motion.button>
					</a>
				</motion.div>
			</motion.div>
		</motion.div>
	);
};

export default AboutMe;
