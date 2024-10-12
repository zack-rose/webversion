type addPlaceBaseUrl = "/add-place";

type urls =
	| "offerings"
	| "request-type"
	| "availability"
	| "location"
	| "setup"
	| "description"
	| "photos"
	| "pricing"
	| "local-attractions"
	| "thank-you";

export type addPlaceUrls = `${addPlaceBaseUrl}/${urls}`;
