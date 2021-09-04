/* eslint-disable @typescript-eslint/ban-ts-ignore */

const fetcher = async (...args: any[]): Promise<any> => {
	// @ts-ignore
	const res = await fetch(...args);

	return res.json();
};

export default fetcher;
