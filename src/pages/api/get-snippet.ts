const getSnippet = async (id): Promise<any> => {
	const response = await fetch(`https://born-api.herokuapp.com/api/v1/snippets/${id}`, {
		headers: {
			"Content-Type": "application/json",
		},
		method: "GET",
	});

	const snippet = await response.json();

	return snippet;
};

export default async (req, res): Promise<any> => {
	const results = await getSnippet(req.query.id);

	return res.status(200).json({ snippet: results });
};
