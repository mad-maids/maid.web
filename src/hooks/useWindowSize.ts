import { useState, useEffect } from "react";

export default function useWindowSize() {
	const windowGlobal = typeof window !== "undefined" && window;
	function getSize() {
		return {
			width: windowGlobal.innerWidth,
			height: windowGlobal.innerHeight,
		};
	}

	const [windowSize, setWindowSize] = useState(getSize);

	useEffect(() => {
		function handleResize() {
			setWindowSize(getSize());
		}

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [getSize]);

	return windowSize;
}
