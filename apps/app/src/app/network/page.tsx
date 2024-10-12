import {
	MyNetworkFollowingCarousel,
	MyNetworkSearch,
} from "@/features/network";

const MyNetwork = () => {
	return (
		<main className="bg-3deg-cream-200 px-[5%] lg:px-[15%] xl:px-[25%] pb-[5%]">
			<MyNetworkFollowingCarousel />
			<MyNetworkSearch />
		</main>
	);
};

export default MyNetwork;
