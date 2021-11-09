import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse): Promise<any> => {
	const link: string = "https://github.com/mad-maids/maid.slave/releases";
	return res.redirect(link);
};
