import { NavBar } from "@/features/common/components/layout";
import { OnboardingBackNavigation } from "@/features/onboarding/components/navigation";

const WelcomeAndOnboardingLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<>
			<NavBar />
			<main className="bg-3deg-cream-200 content-spacing pt-6">
				<OnboardingBackNavigation />

				<section className="flex flex-col justify-center items-center h-full xl:w-[45%] mx-auto pb-[15%]">
					{children}
				</section>
			</main>
		</>
	);
};

export default WelcomeAndOnboardingLayout;
