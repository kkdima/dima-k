import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import projects from '../../public/data/projects.json';
import images from '../../public/data/images.json';
import { wrap } from '@popmotion/popcorn';
import {
	stagger,
	fadeInUp,
	carousel
} from '../../public/styles/framer_animation/animations';
import { useRouter } from 'next/router';

const ID = () =>
	'_' +
	Math.random()
		.toString(36)
		.substr(2, 9);

const Carousel = props => {
	const src = props.src;
	const [[page, direction], setPage] = useState([0, 0]);
	const [height, setHeight] = useState(0);
	const imageRef = useRef(null);
	const swipeConfidenceThreshold = 5000;
	const swipePower = (offset, velocity) => {
		return Math.abs(offset) * velocity;
	};
	const paginate = newDirection => {
		setPage([page + newDirection, newDirection]);
	};
	const imageIndexPath = src.length;
	const imageIndex = wrap(0, imageIndexPath, page);

	return (
		<div className={`hidden md:block overflow-x-hidden m-auto md:max-w-3/4`}>
			<motion.div
				variants={carousel}
				initial={{ opacity: 0 }}
				animate='center'
				exit='exit'
				className='relative pb-2/3 md:pb-1/2 max-h-24 flex justify-center relative project-image'
				style={{ height: `${height}` }}
			>
				<AnimatePresence initial={false} custom={direction}>
					<motion.img
						ref={imageRef}
						className='absolute h-full md:rounded object-contain '
						key={props.src[imageIndex]}
						src={props.src[imageIndex]}
						custom={direction}
						variants={carousel}
						initial='enter'
						animate='center'
						exit='exit'
						transition={{
							x: { type: 'spring', stiffness: 300, damping: 200 },
							opacity: { duration: 0.2 }
						}}
						drag='x'
						dragConstraints={{ left: 0, right: 0 }}
						dragElastic={1}
						onDragEnd={(e, { offset, velocity }) => {
							const swipe = swipePower(offset.x, velocity.x);

							if (swipe < -swipeConfidenceThreshold) {
								paginate(1);
							} else if (swipe > swipeConfidenceThreshold) {
								paginate(-1);
							}
						}}
					/>
				</AnimatePresence>
			</motion.div>
			{src.length > 1 ? (
				<div className='flex justify-between md:px-10'>
					<p className='descriptionPicture  transform -rotate-90 text-gray-500 md:pl-0 fl:pl-12 pl-6 text-sm'>
						some inspirations, behind the scenes, references, etc.
					</p>
					<div className={`flex justify-between -mt-1 opacity-50`}>
						<div className='next rounded' onClick={() => paginate(1)}>
							<img src='/images/arrow-back.svg' alt='back' />
						</div>
						<div className='prev rounded' onClick={() => paginate(-1)}>
							<img src='/images/arrow-back.svg' alt='forward' />
						</div>
					</div>
				</div>
			) : null}
		</div>
	);
};

Carousel.getInitialProps = async ({ query }) => {
	return {
		height: imageRef.current.height,
		src: images[query.project]
	};
};

export default Carousel;
