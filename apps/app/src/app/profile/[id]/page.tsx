import {
	ProfileInfo,
	MySpacesAndRecommendations,
	CommonMembers,
} from "@/features/my-profile";

const UserprofileById = () => {
	return (
		<main className="content-spacing bg-3deg-cream-200">
			<ProfileInfo
				containerClassName="lg:flex-row place-content-center md:gap-10"
				imageContainerClassName="size-[18rem]"
				pencilClassName="!right-12"
			/>

			<CommonMembers />
			<MySpacesAndRecommendations />
		</main>
	);
};

export default UserprofileById;
