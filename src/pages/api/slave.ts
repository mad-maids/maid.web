import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse): Promise<any> => {
	const latestLink = "https://api.github.com/repos/mad-maids/maid.slave/releases/latest";
	const latestContent = await (await fetch(latestLink)).json();
	return res.redirect(latestContent.html_url);
};
