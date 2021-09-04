import { useEffect, useRef } from "react";

const useIsMounted = () => {
	const isMounted = useRef(false);
	// @ts-ignore
	useEffect(() => {
		isMounted.current = true;
		return () => (isMounted.current = false);
	}, []);
	return isMounted;
};

export default useIsMounted;
