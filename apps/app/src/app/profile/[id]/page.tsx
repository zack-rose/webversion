import { ProfileInfo, MyprofileListings } from "@/features/my-profile";

const UserprofileById = () => {
	return (
		<main className="content-spacing bg-3deg-cream-200">
			<ProfileInfo pencilClassName="md:bottom-[-0.2rem] md:right-0" />
			<MyprofileListings />
		</main>
	);
};

export default UserprofileById;
