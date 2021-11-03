import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse): Promise<any> => {
	const link: string = "https://discord.gg/mKKekABEzx";
	return res.redirect(link);
};
