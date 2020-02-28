import { motion } from 'framer-motion';
import Layout from '../../components/layout';
import Link from 'next/link';
import { stagger, fadeInUp } from '../../public/styles/framer_animation/index';

const Project = props => {
	const { title, description } = props;
	return (
		<motion.div
			variants={fadeInUp}
			initial='initial'
			animate='animate'
			exit={{ opacity: 0 }}
		>
			<div className='flex'>
				<Link href='/'>
					<motion.button
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9, y: '5px' }}
						className='px-3 rounded py-1 bg-blue-c flex m-auto mb-4 mt-8'
					>
						<motion.img
							src='/images/arrow-back.svg'
							className='pr-2 rounded py-1 bg-blue-c'
							alt=''
						/>
						Home
					</motion.button>
				</Link>
				<h1>{title}</h1>
				<p>{description}</p>
			</div>
			<div></div>
		</motion.div>
	);
};

Project.getInitialProps = async ({ query }) => {
	return {
		title: query.title,
		description: query.description
	};
};

export default Project;
