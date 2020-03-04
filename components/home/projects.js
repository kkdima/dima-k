import React, { useRef } from 'react';
import Link from 'next/link';
import { fadeInUp } from '../../public/styles/framer_animation/animations';
import projects from '../../public/data/projects.json';
import { motion } from 'framer-motion';

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
		<motion.div
			exit={{ opacity: 0, y: -60 }}
			variants={fadeInUp}
			initial='initial'
			animate='animate'
			className='rounded container-custom h-full md:w-full md:width-465 overflow-hidden'
		>
			<h2 className='text-4xl font-bold mb-6'>Projects</h2>

			<div className='flex-col content-between'>
				{projects.projects.map(project => (
					<div key={project.id} className='relative mb-9'>
						<img src={project.img} className='rounded w-full' alt='' />
						<ProjectLink title={project.route} />
					</div>
				))}
			</div>
		</motion.div>
	);
};

export default Projects;
