import { HiOutlineChatBubbleLeftEllipsis } from "react-icons/hi2"

const Messages = () => {
	return (
		<div className="hidden lg:flex lg:min-h-[75vh] overflow-auto flex-col place-content-center place-items-center rounded-lg bg-3deg-cream-450 space-y-4">
			<HiOutlineChatBubbleLeftEllipsis className="size-16" />
			<h2 className="text-3deg-black-300 text-2xl font-semibold">
				Select a chat to get started
			</h2>
		</div>
	)
}

export default Messages
