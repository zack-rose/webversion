import { GoBackNavigation } from "@/features/add-a-place";

const AddPlaceLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<div className="content-spacing bg-3deg-cream-200 pt-6">
			<GoBackNavigation />
			{children}
		</div>
	);
};

export default AddPlaceLayout;
