import {
	slideLeft,
	scale,
	slideRight,
	numFadeIn,
	numFadeOut,
	infoFadeIn,
	infoFadeOut,
} from "../animations/slider-anim";

const nextSlide = (
	imageList,
	numList,
	imageWidth,
	setActive,
	infoList
): void => {
	if (imageList.children[0].classList.contains("active")) {
		setActive({ isActive1: false, isActive2: true });
		slideLeft(imageList.children, imageWidth, 0, 1);
		slideLeft(imageList.children, imageWidth, 1, 1);
		scale(imageList.children, 1, 1);
		slideLeft(imageList.children, imageWidth, 2, 1);
		slideLeft(imageList.children, imageWidth, 2, 0);
		numFadeOut(numList.children, 0, 0.7);
		numFadeIn(numList.children, 1, 0.7);
		infoFadeOut(infoList.children, 0, 0.7);
		infoFadeIn(infoList.children, 1, 0.7);
	} else if (imageList.children[1].classList.contains("active")) {
		setActive({ isActive2: false, isActive3: true });
		slideRight(imageList.children, imageWidth, 0, 1);
		slideLeft(imageList.children, imageWidth, 1, 1, 2);
		slideLeft(imageList.children, imageWidth, 2, 1, 2);
		scale(imageList.children, 2, 1);
		numFadeOut(numList.children, 1, 0.7);
		numFadeIn(numList.children, 2, 0.7);
		infoFadeOut(infoList.children, 1, 0.7);
		infoFadeIn(infoList.children, 2, 0.7);
	} else if (imageList.children[2].classList.contains("active")) {
		setActive({ isActive1: true, isActive3: false });
		slideLeft(imageList.children, imageWidth, 2, 1, 3);
		slideLeft(imageList.children, imageWidth, 0, 1, 0);
		slideLeft(imageList.children, imageWidth, 1, 0, 0);
		scale(imageList.children, 0, 1);
		numFadeOut(numList.children, 2, 0.7);
		numFadeIn(numList.children, 0, 0.7);
		infoFadeOut(infoList.children, 2, 0.7);
		infoFadeIn(infoList.children, 0, 0.7);
	}
};

const prevSlide = (
	imageList,
	numList,
	imageWidth,
	setActive,
	infoList
): void => {
	if (imageList.children[0].classList.contains("active")) {
		setActive({ isActive1: false, isActive3: true });
		slideLeft(imageList.children, imageWidth, 2, 0, 3);
		slideLeft(imageList.children, imageWidth, 2, 1, 2);
		scale(imageList.children, 2, 1);
		slideRight(imageList.children, imageWidth, 0, 1);
		slideRight(imageList.children, imageWidth, 1, 1);
		numFadeOut(numList.children, 0, 0.7);
		numFadeIn(numList.children, 2, 1);
		infoFadeOut(infoList.children, 0, 0.7);
		infoFadeIn(infoList.children, 2, 1);
	} else if (imageList.children[1].classList.contains("active")) {
		setActive({ isActive2: false, isActive1: true });
		slideLeft(imageList.children, imageWidth, 0, 0);
		slideRight(imageList.children, imageWidth, 0, 1, 0);
		slideRight(imageList.children, imageWidth, 1, 1, 0);
		slideRight(imageList.children, imageWidth, 2, 1, 2);
		scale(imageList.children, 0, 1);
		numFadeOut(numList.children, 1, 0.7);
		numFadeIn(numList.children, 0, 1);
		infoFadeOut(infoList.children, 1, 0.7);
		infoFadeIn(infoList.children, 0, 1);
	} else if (imageList.children[2].classList.contains("active")) {
		setActive({ isActive2: true, isActive3: false });
		slideLeft(imageList.children, imageWidth, 2, 1);
		slideLeft(imageList.children, imageWidth, 1, 0, 2);
		slideLeft(imageList.children, imageWidth, 1, 1);
		scale(imageList.children, 1, 1);
		numFadeOut(numList.children, 2, 0.7);
		numFadeIn(numList.children, 1, 1);
		infoFadeOut(infoList.children, 2, 0.7);
		infoFadeIn(infoList.children, 1, 1);
	}
};
export { nextSlide, prevSlide };
