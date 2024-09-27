interface Props {
	title: string;
	location: string;
	rent: number;
}

export const SampleData = {
	title: "West Hollywood",
	location:
		"65 Camberwell Church St. Peckham, Greater London, SE5 8TR, United Kingdom",
	rent: 175,
} satisfies Props;

export const ListingData: Props[] = Array.from({ length: 6 }, () => ({
	...SampleData,
}));

export const ListingData3: Props[] = Array.from({ length: 3 }, () => ({
	...SampleData,
}));
