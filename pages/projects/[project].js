import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
	stagger,
	fadeInUp
} from '../../public/styles/framer_animation/animations';
import projects from '../../public/data/projects.json';
import Carousel from '../../components/projects/carousel';

const ButtonBack = props => (
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
	const { name, description } = props.project;

	return (
		<motion.div
			exit={{ opacity: 0 }}
			variants={fadeInUp}
			initial='initial'
			animate='animate'
			className='md:flex'
		>
			<div className='bg-white md:bg-appleGrey h-screen justify-start overflow-x-hidden flex-col md:w-1/2'>
				<div className='py-12 px-6 fl:px-12 ad:px-0 m-auto ad:max-w-3/4'>
					<ButtonBack />
					<h1 className='text-4xl mt-12 font-bold mb-3'>{name}</h1>
					<p className='paragraph'>{description}</p>
				</div>

				<Carousel resize='md:hidden block' />

				<div className='p-6 fl:px-12 ad:px-0 m-auto ad:max-w-3/4'>
					<h2 className='text-2xl'>Tech Stack:</h2>
					<p>
						<span className='font-bold'>React JS</span> – Front-end <br />
						<span className='font-bold'>Netlify</span> – Deployment <br />
						<span className='font-bold'>Framer Motion</span> – Animation <br />
					</p>
				</div>
			</div>
			<div className='md:w-1/2 relative px-3 pt-48 fl:px-12 md:px-0 ad:max-w-3/4 hidden md:block'>
				<Carousel resize='hidden md:block' />
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
