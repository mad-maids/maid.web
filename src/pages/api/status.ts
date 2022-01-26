import { NextApiRequest, NextApiResponse } from "next";

export default async (
	req: NextApiRequest,
	res: NextApiResponse
): Promise<any> => {
	const link: string = "https://slaves.instatus.com/";
	return res.redirect(link);
};
