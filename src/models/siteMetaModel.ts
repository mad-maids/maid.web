interface TwitterModel {
	twitterCard: string;
	twitterTitle: string;
	twitterDescription: string;
	twitterImage: string;
	twitterSite: string;
	twitterHandle: string;
}

interface FacebookModel {
	facebookUrl: string;
	facebookTitle: string;
	facebookDescription: string;
	facebookImage: string;
	facebookType: string;
}

interface SocialMediaModel {
	twitter: TwitterModel;
	facebook: FacebookModel;
}

export interface SiteMetaModel {
	title: string;
	description: string;
	author: string;
	socialMedia: SocialMediaModel;
}
