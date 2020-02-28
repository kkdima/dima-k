import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const ProjectLink = props => (
	<Link href={`/projects?title=${props.title}`} as={`/projects/${props.title}`}>
		<motion.button
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.9, y: '5px' }}
			className='absolute right-0 mr-8 mb-3 bottom-0 y-0 px-3 rounded flex bg-blue-c'
		>
			open
		</motion.button>
	</Link>
);

const Projects = () => {
	return (
		<div className='rounded container-custom h-full md:w-full md:width-465 overflow-hidden'>
			<h2 className='text-4xl font-bold mb-6'>Projects</h2>

			<div className='flex-col content-between'>
				<div className='relative mb-9'>
					<img src='/images/barva-design.png' className='rounded w-full' alt='' />
					<ProjectLink
						title='barva'
						image='456789'
						description='lorem ipsum lorem ipsum lorem ipsum'
					/>
				</div>

				<div className='relative mb-9'>
					<img src='/images/github-finder.svg' className='rounded w-full' alt='' />
					<ProjectLink title='github-finder' />
				</div>

				<div className='relative mb-9'>
					<img src='images/Contacts-2-0.svg' className='rounded w-full' alt='' />
					<ProjectLink title='contacts-app' />
				</div>
				{/* Here goes the div with funny pic about your ad. */}
			</div>
		</div>
	);
};

export default Projects;
