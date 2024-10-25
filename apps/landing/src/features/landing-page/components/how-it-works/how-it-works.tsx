import { HowItWorksCard, HowItWorksContent } from "./how-it-works.card";

export const HowItWorks = () => {
	return (
		<section
			className="bg-3deg-cream-200 content-spacing pt-10"
			id="how-it-works"
		>
			<h3 className="text-3xl lg:text-5xl text-3deg-choco-100 pb-6 uppercase">
				How it Works
			</h3>

			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
				{HowItWorksContent.map((item) => (
					<HowItWorksCard key={item.title} {...item} />
				))}
			</div>
		</section>
	);
};
