const easing = [0.6, -0.05, 0.01, 0.99];

export const stagger = {
	animate: {
		transition: {
			staggerChildren: 0.1
		}
	}
};

export const fadeInUp = {
	initial: {
		y: 60,
		opacity: 0,
		transition: { duration: 0.6, ease: easing }
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.6,
			ease: easing
		}
	},
	exit: {
		opacity: 0
	}
};

export const fadeInDown = {
	initial: {
		y: -60,
		opacity: 0,
		transition: { duration: 0.6, ease: easing }
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.6,
			ease: easing
		}
	}
};

export const carousel = {
	enter: direction => {
		return {
			x: direction > 0 ? 1000 : -1000,
			opacity: 0
		};
	},
	center: {
		zIndex: 1,
		x: 0,
		opacity: 1
	},
	exit: direction => {
		return {
			zIndex: 0,
			x: direction < 0 ? 1000 : -1000,
			opacity: 0
		};
	}
};
