/* eslint-disable prefer-const */
import React, { useRef, useState, FunctionComponent } from "react";
import gsap from "gsap";
import Link from "next/link";
import useDimensions from "react-cool-dimensions";
import Image from "next/image";
import styled from "@emotion/styled";

import { media } from "../../styles/styles-utils";
import { prevSlide, nextSlide } from "../../functions/sliderFunctions";

const sliderNum = [{ num: 1 }, { num: 2 }, { num: 3 }];

const pathPrefix = `/works/`;

interface InfoEntryProps {
	itemText: string;
	itemSubtitle: string;
}

interface HomepageSliderProps {
	data: Record<string, any>;
	onCursor: (cursorType: string | void) => void;
}

const InfoEntry: FunctionComponent<InfoEntryProps> = ({ itemText, itemSubtitle }) => (
	<p>
		{itemSubtitle}: {itemText}
	</p>
);

const HomepageSlider: FunctionComponent<HomepageSliderProps> = ({ data, onCursor }) => {
	const sliderData = data;

	let imageList = useRef(null);
	let numList = useRef(null);
	let infoList = useRef(null);

	const [active, setActive] = useState({
		isActive1: true,
		isActive2: false,
		isActive3: false,
	});

	const { ref, width }: any = useDimensions();
	const imageWidth = width;

	const hoverIn = (): void => {
		gsap.set("img", {
			css: { filter: "grayscale(0)" },
		});
	};

	const hoverOut = (): void => {
		gsap.set("img", {
			css: { filter: "grayscale(100%)" },
		});
	};

	return (
		<SliderContainer>
			<SliderInfoStyles>
				{/* @ts-ignore */}
				<ul ref={(el): any => (infoList = el)}>
					<li>
						{sliderData.slice(0, 1).map((frontMatter, i) => (
							<React.Fragment key={i}>
								<InfoEntry itemSubtitle="Project" itemText={frontMatter.title} />
								<InfoEntry itemSubtitle="Role" itemText={frontMatter.role} />
								<InfoEntry itemSubtitle="Date" itemText={frontMatter.date} />
							</React.Fragment>
						))}
					</li>
					<li>
						{sliderData.slice(1, 2).map((frontMatter, i) => (
							<React.Fragment key={i}>
								<InfoEntry itemSubtitle="Project" itemText={frontMatter.title} />
								<InfoEntry itemSubtitle="Role" itemText={frontMatter.role} />
								<InfoEntry itemSubtitle="Date" itemText={frontMatter.date} />
							</React.Fragment>
						))}
					</li>
					<li>
						{sliderData.slice(2).map((frontMatter, i) => (
							<React.Fragment key={i}>
								<InfoEntry itemSubtitle="Project" itemText={frontMatter.title} />
								<InfoEntry itemSubtitle="Role" itemText={frontMatter.role} />
								<InfoEntry itemSubtitle="Date" itemText={frontMatter.date} />
							</React.Fragment>
						))}
					</li>
				</ul>
			</SliderInfoStyles>
			<SliderWrapper>
				<SliderContent ref={ref}>
					<SliderNavigation>
						<SliderIndicator style={{ maxWidth: imageWidth }}>
							<ul ref={(el: any): void => (numList = el)}>
								<li className={active.isActive1 ? "active" : ""}>
									<p>{sliderNum[0].num}</p>
								</li>
								<li className={active.isActive2 ? "active" : ""}>
									<p>{sliderNum[1].num}</p>
								</li>
								<li className={active.isActive3 ? "active" : ""}>
									<p>{sliderNum[2].num}</p>
								</li>
							</ul>
							<Seperator>
								<div className="seperator" />
							</Seperator>
							<p>{sliderNum[2].num}</p>
						</SliderIndicator>
						<SliderArrows>
							<button
								type="button"
								onClick={(): void => prevSlide(imageList, numList, imageWidth, setActive, infoList)}
								style={{ background: "none" }}
								onMouseEnter={(): void => {
									hoverIn();
									onCursor("pointer");
								}}
								onMouseLeave={(): void => {
									hoverOut();
									onCursor();
								}}
							>
								<p>PREV</p>
							</button>
							<button
								type="button"
								onClick={(): void => nextSlide(imageList, numList, imageWidth, setActive, infoList)}
								style={{ background: "none" }}
								onMouseEnter={(): void => {
									hoverIn();
									onCursor("pointer");
								}}
								onMouseLeave={(): void => {
									hoverOut();
									onCursor();
								}}
							>
								<p>NEXT</p>
							</button>
						</SliderArrows>
					</SliderNavigation>
					<ul ref={(el: any): void => (imageList = el)}>
						{sliderData.slice(0, 1).map((frontMatter) => {
							const image = `/assets/work/${frontMatter.image}`;
							return (
								<React.Fragment key={frontMatter.title}>
									<Link href={`${pathPrefix}${frontMatter.slug}`}>
										<SliderImage
											className={active.isActive1 ? "active" : ""}
											onMouseEnter={(): void => onCursor("pointer")}
											onMouseLeave={(): void => onCursor()}
										>
											<div style={{ width: imageWidth }}>
												<div className="overlay" />
												<Image src={image} unsized quality={100} />
											</div>
										</SliderImage>
									</Link>
								</React.Fragment>
							);
						})}
						{sliderData.slice(1, 2).map((frontMatter) => {
							const image = `/assets/work/${frontMatter.image}`;
							return (
								<React.Fragment key={frontMatter.title}>
									<Link href={`${pathPrefix}${frontMatter.slug}`}>
										<SliderImage
											className={active.isActive2 ? "active" : ""}
											onMouseEnter={(): void => onCursor("pointer")}
											onMouseLeave={(): void => onCursor()}
										>
											<div style={{ width: imageWidth }}>
												<div className="overlay" />
												<Image src={image} unsized quality={100} />
											</div>
										</SliderImage>
									</Link>
								</React.Fragment>
							);
						})}
						{sliderData.slice(2).map((frontMatter) => {
							const image = `/assets/work/${frontMatter.image}`;
							return (
								<React.Fragment key={frontMatter.title}>
									<Link href={`${pathPrefix}${frontMatter.slug}`}>
										<SliderImage
											className={active.isActive3 ? "active" : ""}
											onMouseEnter={(): void => onCursor("pointer")}
											onMouseLeave={(): void => onCursor()}
										>
											<div style={{ width: imageWidth }}>
												<div className="overlay" />
												<Image src={image} unsized quality={100} />
											</div>
										</SliderImage>
									</Link>
								</React.Fragment>
							);
						})}
					</ul>
				</SliderContent>
			</SliderWrapper>
		</SliderContainer>
	);
};
export default HomepageSlider;

const Seperator = styled.div`
	padding: 7px 18px;
	.seperator {
		background: ${(props): string => props.theme.tietary};
		height: 1.8px;
		width: 140px;
	}
`;

const SliderContainer = styled.div`
	padding: 0 14%;
`;

const SliderWrapper = styled.div`
	ul {
		display: flex;
		width: 100%;
		overflow: hidden;
		position: relative;
	}

	button {
		background-color: ${(props): string => props.theme.primary} !important;
	}
`;
const SliderContent = styled.div`
	padding-top: 100px;
	${media.thone`padding-top: 80px;`}
`;
const SliderImage = styled.li`
	position: relative;

	img {
		width: 100%;
		transition: ease 0.4s;
		filter: grayscale(100%);
	}
	h1 {
		position: absolute;
		z-index: 2;
		bottom: 100px;
		padding: 0 6%;
		width: 800px;
		text-transform: uppercase;
		${media.desktop`padding: 0 4%; width: 400px; bottom: 40px;`}
	}
	.overlay {
		width: 100%;
		height: 100%;
		position: absolute;
		z-index: 1;
		background: rgba(10, 10, 10, 0.06);
	}
`;

const SliderNavigation = styled.div`
	display: flex;
	flex-shrink: 2;
	width: 100%;
	justify-content: space-between;
	padding-top: 21px;
	padding-bottom: 20px;
	${media.desktop` `} svg {
		stroke: ${(props): string => props.theme.tietary};
	}
`;

const SliderArrows = styled.div`
	button {
		margin-left: 31px;
		background: none !important;
	}
	p {
		font-size: 16px;
		transition: ease 0.4s;
		/* &:hover {
			color: ${(props): string => props.theme.accent};
		} */
	}
`;
const SliderIndicator = styled.div`
	display: flex;
	p {
		font-size: 16px;
		color: ${(props): string => props.theme.tietary};
	}
	ul {
		position: relative;
		overflow: hidden;
		width: 10px;
		li {
			width: 10px;

			position: absolute;
			opacity: 0;
			&:nth-of-type(1) {
				opacity: 1;
			}
		}
	}
`;

const SliderInfoStyles = styled.div`
	ul {
		display: flex;
		position: relative;
		width: 100%;

		li {
			position: absolute;
			opacity: 0;
			&:nth-of-type(1) {
				opacity: 1;
			}
		}
	}
`;
