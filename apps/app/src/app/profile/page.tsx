import { ProfileInfo, MyprofileListings } from "@/features/my-profile"

const MyProfile = () => {
	return (
		<main className="content-spacing bg-3deg-cream-200">
			<ProfileInfo
				pencilClassName="md:bottom-[-0.2rem] md:right-0"
				showFollowButton={false}
			/>
			<MyprofileListings />
		</main>
	)
}

export default MyProfile
