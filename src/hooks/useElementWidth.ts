/* eslint-disable @typescript-eslint/ban-ts-ignore */
import { useEffect, useState } from "react";

const useElementWidth = () => {
	const [width, setWidth] = useState({
		value: null,
	});
	useEffect(() => {
		const elementWidth = document.querySelector(".grid").clientWidth;
		setWidth({ value: elementWidth });
		// @ts-ignore
		const handleResize = () => setWidth({ width: elementWidth });

		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);
	return { width };
};

export default useElementWidth;
