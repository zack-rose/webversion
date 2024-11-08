import { ProfileInfo, MyprofileListings } from "@/features/my-profile";

const MyProfile = () => {
	return (
		<main className="content-spacing bg-3deg-cream-200">
			<ProfileInfo
				pencilClassName="!right-12"
				showFollowButton={false}
				imageContainerClassName="size-[18rem]"
			/>
			<MyprofileListings />
		</main>
	);
};

export default MyProfile;
