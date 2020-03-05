import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import projects from '../../public/data/projects.json';
import { wrap } from '@popmotion/popcorn';
import { images } from '../../public/data/projects';
import {
	stagger,
	fadeInUp
} from '../../public/styles/framer_animation/animations';
import { useRouter } from 'next/router';

const variants = {
	enter: direction => {
		return {
			x: direction > 0 ? 1000 : -1000,
			opacity: 0
		};
	},
	center: {
		// zIndex: 1,
		x: 0,
		opacity: 1
	},
	exit: direction => {
		return {
			// zIndex: 0,
			x: direction < 0 ? 1000 : -1000,
			opacity: 0
		};
	}
};

const Carousel = props => {
	const [[page, direction], setPage] = useState([0, 0]);
	const [height, setHeight] = useState(0);
	const imageRef = useRef(null);
	const imageIndex = wrap(0, images.length, page);
	const router = useRouter();
	const swipeConfidenceThreshold = 5000;
	const swipePower = (offset, velocity) => {
		return Math.abs(offset) * velocity;
	};
	const paginate = newDirection => {
		setPage([page + newDirection, newDirection]);
	};

	useEffect(() => {
		const resizeListener = () => {
			setHeight(imageRef.current.height);
		};
		resizeListener();
		window.addEventListener('resize', resizeListener);
		return () => {
			window.removeEventListener('resize', resizeListener);
		};
	}, [height]);

	return (
		<div className={`${props.resize} overflow-x-hidden m-auto md:max-w-3/4`}>
			<AnimatePresence initial={false} custom={direction}>
				<motion.div
					variants={variants}
					initial='enter'
					animate='center'
					exit='exit'
					className='relative project-image'
				>
					<motion.img
						ref={imageRef}
						className='absolute md:rounded'
						key={images[imageIndex]}
						src={images[imageIndex]}
						custom={direction}
						variants={variants}
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
				</motion.div>
			</AnimatePresence>
			<div
				style={{
					paddingBottom: `${height / 2}px`,
					paddingTop: `${height / 2 - 15}px`
				}}
				className={`flex justify-between px-3 opacity-50`}
			>
				<div className='next rounded' onClick={() => paginate(1)}>
					<img src='/images/arrow-back.svg' alt='back' />
				</div>
				<div className='prev rounded' onClick={() => paginate(-1)}>
					<img src='/images/arrow-back.svg' alt='forward' />
				</div>
			</div>
			<p className='text-sm'>some inspirations, behind the scenes, references, etc.</p>
		</div>
	);
};

Carousel.getInitialProps = async () => {
	return {
		height: imageRef.current.height
	};
};

export default Carousel;
