import { useEffect, useState } from "react";

export default function useGetWindow() {
	const windowGlobal = typeof window !== "undefined" && window;
	const [dimensions, setDimensions] = useState({
		width: windowGlobal.innerWidth,
	});

	useEffect(() => {
		const handleResize = () =>
			setDimensions({ width: windowGlobal.innerWidth });
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	});

	return { dimensions };
}
