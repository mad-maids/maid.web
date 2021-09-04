import firebase from "../../lib/firebase";

export default (req, res): Promise<any> => {
	if (!req.query.id) {
		return firebase.ref("views").once("value", (snapshot) => {
			const views = snapshot.val();
			const allViews = Object.values(views).reduce((total: any, value: any) => total + value);

			return res.status(200).json({
				total: allViews,
			});
		});
	}

	const ref = firebase.ref("views").child(req.query.id);

	return ref.once("value", (snapshot) => {
		res.status(200).json({
			total: snapshot.val(),
		});
	});
};
