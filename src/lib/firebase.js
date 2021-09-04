import firebase from "firebase/app";

require("firebase/database");

try {
	firebase.initializeApp({
		apiKey: process.env.API_KEY,
		authDomain: process.env.AUTH_DOMAIN,
		databaseURL: "https://bornwhitfield-9bf74.firebaseio.com",
		projectId: process.env.PROJECT_ID,
		messagingSenderId: process.env.MESSAGING_SENDER_ID,
		appId: process.env.APP_ID,
	});
} catch (error) {
	if (!/already exists/u.test(error.message)) {
		// eslint-disable-next-line no-console
		console.error("Firebase initialization error", error.stack);
	}
}

export default firebase.database();
