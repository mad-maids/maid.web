import gsap, { Power3 } from "gsap";

export const slideLeft = (node1, node2, index, duration, multipled = 1): void => {
	gsap.to(node1[index], duration, {
		x: -node2 * multipled,
		ease: Power3.easeOut,
	});
};
export const slideRight = (node1, node2, index, duration, multipled = 1): void => {
	gsap.to(node1[index], duration, {
		x: node2 * multipled,
		ease: Power3.easeOut,
	});
};
export const scale = (node, index, duration): void => {
	gsap.from(node[index], duration, {
		scale: 1.2,
		ease: Power3.easeOut,
	});
};
export const numFadeOut = (node, index, duration): void => {
	gsap.to(node[index], duration, {
		opacity: 0,
		ease: Power3.easeOut,
	});
};
export const numFadeIn = (node, index, duration): void => {
	gsap.to(node[index], duration, {
		opacity: 1,
		delay: 0.2,
		ease: Power3.easeIn,
	});
};
export const infoFadeOut = (node, index, duration): void => {
	gsap.set(node[index], {
		css: { visibility: "hidden" },
	});
	gsap.to(node[index], duration, {
		opacity: 0,
		ease: Power3.easeOut,
	});
};
export const infoFadeIn = (node, index, duration): void => {
	gsap.set(node[index], {
		css: { visibility: "visible" },
	});
	gsap.to(node[index], duration, {
		opacity: 1,
		delay: 0.2,
		ease: Power3.easeIn,
	});
};
