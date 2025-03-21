import Image from "next/image";

interface Props {
	title: string;
	content: string;
	imagePath: string;
}

export const HowItWorksCard = ({ title, content, imagePath }: Props) => {
	return (
		<div className="rounded-lg overflow-hidden p-2">
			<div className="relative w-full h-[32rem]">
				<Image src={imagePath} className="rounded-xl" alt={title} fill />
			</div>

			<h4 className="pt-3 pb-2 text-3deg-black-300 text-[2.5rem] leading-10 font-grifinito">
				{title}
			</h4>

			<p className="text-3deg-choco-200 text-sm">{content}</p>
		</div>
	);
};

export const HowItWorksContent = [
	{
		title: "Apply to Unlock Access",
		content:
			"Join the community by answering a few questions about yourself, and enter your invite code if you have one. Once you are approved, you will receive an email to activate your membership.",
		imagePath: "/images/unlock-access.png",
	},
	{
		title: "Activate & Sync Network",
		content:
			"Join the community by answering a few questions about yourself, and enter your invite code if you have one. Once you are approved, you will receive an email to activate your membership.",
		imagePath: "/images/sync-network.png",
	},
	{
		title: "List Your Home",
		content:
			"Join the community by answering a few questions about yourself, and enter your invite code if you have one. Once you are approved, you will receive an email to activate your membership.",
		imagePath: "/images/list-home.png",
	},
] satisfies Props[];
