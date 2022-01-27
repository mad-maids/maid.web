import { NextApiRequest, NextApiResponse } from "next";

export default async (
	req: NextApiRequest,
	res: NextApiResponse
): Promise<any> => {
	const link: string = "https://youtu.be/eBGIQ7ZuuiU";
	return res.redirect(link);
};
