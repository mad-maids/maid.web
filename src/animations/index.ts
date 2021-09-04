const fadeInUp = (delay): any => ({
	opacity: 1,
	y: 0,
	transition: {
		delay: delay,
		duration: 2,
		ease: [0.6, 0.05, -0.01, 1],
	},
});

const fadeOutDown = (delay): any => ({
	opacity: 0,
	y: 20,
	transition: {
		delay: delay,
		duration: 1,
		ease: [0.6, 0.05, -0.01, 0.9],
	},
});

export { fadeInUp, fadeOutDown };
