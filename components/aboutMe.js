import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const variants = {
	visible: {
		opacity: 1,
		transition: {
			// duration: 1
		}
	},
	hidden: {
		opacity: 0,
		transition: {
			// duration: 0
		}
	}
};

const AboutMe = () => {
	return (
		<div className='rounded text-lg container-custom'>
			<h2 className='text-4xl font-bold'>About me</h2>
			<p className='paragraph mb-5'>
				More than anything else I strive to create. And things like design serve me
				as great inspirations. I believe that commitment and hard work can overcome
				anything. Thus, my motto is to enjoy the journey and always to learn new
				things.
			</p>
			<div className='inline-flex'>
				<img src='/images/Ellipse.svg' className='object-contain mr-4' alt='' />
				<p>6+ years of graphic/web design experience</p>
			</div>
			<br />
			<div className='inline-flex'>
				<img src='/images/Ellipse.svg' className='object-contain mr-4' alt='' />
				<p>Attention to details</p>
			</div>
			<br />
			<div className='inline-flex'>
				<img src='/images/Ellipse.svg' className='object-contain mr-4' alt='' />
				<p>Fast learner and adapter to the new workflows</p>
			</div>
			<div className='container w-full flex justify-end'>
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
			</div>
		</div>
	);
};

export default AboutMe;