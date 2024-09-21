const onboardingPath = "/welcome";

export const RouteLinks = {
	welcome: {
		index: () => `${onboardingPath}`,
		info: () => `${onboardingPath}/info`,
		"personal-info": () => `${onboardingPath}/personal-info`,
		interests: () => `${onboardingPath}/interests`,
		socials: () => `${onboardingPath}/socials`,
	},
};
