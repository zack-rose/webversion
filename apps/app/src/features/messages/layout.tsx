import { ChatListCard } from "@/features/messages";
import { cn } from "@/features/common/utils";

interface Props {
	children: React.ReactNode;
	chatListContainerClassName?: string;
}

export const MessagesLayout = ({
	children,
	chatListContainerClassName,
}: Props) => {
	return (
		<main className="content-spacing bg-3deg-cream-200 flex lg:gap-6 pt-[2%] pb-[4%]">
			<div
				className={cn(
					"lg:w-2/5 2xl:w-1/3 lg:max-h-[75vh] custom-scrollbar",
					chatListContainerClassName
				)}
			>
				<h3 className="text-xl font-semibold text-3deg-black-300 mb-4">
					Messages
				</h3>

				<section>
					{Array.from({ length: 20 }).map((_item, i) => (
						<ChatListCard key={i} />
					))}
				</section>
			</div>

			<div className="lg:w-3/5 2xl:w-2/3 lg:max-h-[75vh]">{children}</div>
		</main>
	);
};
