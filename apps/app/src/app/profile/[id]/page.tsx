import {
	ProfileInfo,
	MySpacesAndRecommendations,
	CommonMembers,
} from "@/features/my-profile"

const UserprofileById = () => {
	return (
		<main className="content-spacing bg-3deg-cream-200">
			<ProfileInfo
				containerClassName="flex-row place-content-center md:gap-10"
				imageContainerClassName="size-[4rem] xxsm:size-[6.5rem] md:size-[12rem]"
			/>

			<CommonMembers />
			<MySpacesAndRecommendations />
		</main>
	)
}

export default UserprofileById
