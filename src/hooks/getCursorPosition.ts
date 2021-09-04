// import { useState, useEffect } from 'react';

// const useGetCursorPosition = () => {
//   const [mousePosition, setMousePosition] = useState({
//     x: 0,
//     y: 0,
//   });
//   const onMouseMove = event => {
//     const { pageX: x, pageY: y } = event;

//     setMousePosition({ x, y });
//   };
//   useEffect(() => {
//     document.addEventListener('mousemove', onMouseMove);
//     return () => {
//       document.removeEventListener('mousemove', onMouseMove);
//     };
//   }, []);

//   return mousePosition;
// };

// export default useGetCursorPosition;

import { useEffect, useState } from "react";

export const useMousePosition = (): any => {
	const [position, setPosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const setFromEvent = (e): void => setPosition({ x: e.clientX, y: e.clientY });
		window.addEventListener("mousemove", setFromEvent);

		return (): void => {
			window.removeEventListener("mousemove", setFromEvent);
		};
	}, []);

	return position;
};
