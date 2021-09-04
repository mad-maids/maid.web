/* eslint-disable @typescript-eslint/ban-ts-ignore */
import { useEffect, useState } from "react";

const useElementPosition = (el) => {
	const getElement = (x, y) => ({ x, y });
	// @ts-ignore
	const [elementPosition, setElementPosition] = useState(getElement);

	useEffect(() => {
		const handlePositon = () => {
			const element = el.current;
			const x =
				element.getBoundingClientRect().left +
				document.documentElement.scrollLeft +
				element.offsetWidth / 2;
			const y =
				element.getBoundingClientRect().top +
				document.documentElement.scrollTop +
				element.offsetHeight / 2;

			setElementPosition(getElement(x, y));
		};
		handlePositon();
	}, [el]);

	return elementPosition;
};

export default useElementPosition;
