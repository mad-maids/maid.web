import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse): Promise<any> => {
	const link: string = "https://www.youtube.com/watch?v=ih9zBLDr_ro";
	return res.redirect(link);
};
