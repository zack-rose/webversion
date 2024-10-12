import { Avatar } from "@/features/common/components/avatar"
import { SingleChatMessage } from "./single-chat-message"

const audioSrc = "/wave-sound.mp3"

export const ChatContainer = () => {
	return (
		<div className="bg-3deg-white-100 h-[65vh] overflow-auto p-2 md:p-6 rounded-lg sticky top-4">
			<div className="text-center text-xs text-3deg-orange-100 bg-3deg-orange-100 bg-opacity-20 py-1 px-2 mx-auto rounded-xl w-fit mb-4">
				Yesterday 13:00
			</div>

			<div className="flex gap-3">
				<Avatar
					src="/images/avatar.jpeg"
					className="size-6 mt-1"
					alt="user avatar"
				/>

				<div className="max-w-[80%]">
					<SingleChatMessage
						type="receiver"
						message="Hi there, yes it is. The rate is 500 per night"
					/>
					<SingleChatMessage
						type="receiver"
						message="Hi there, yes it is. The rate is 500 per night"
					/>
					<SingleChatMessage
						type="receiver"
						messageType="audio"
						message={audioSrc}
					/>
				</div>
			</div>

			<div>
				<SingleChatMessage
					type="sender"
					message="Hi there, yes it is. The rate is 500 per night"
				/>
				<SingleChatMessage
					type="sender"
					message="Hi there, yes it is. The rate is 500 per night"
				/>
			</div>

			<div className="flex gap-3">
				<Avatar
					src="/images/avatar.jpeg"
					className="size-6 mt-1"
					alt="user avatar"
				/>

				<div className="max-w-[80%]">
					<SingleChatMessage
						type="receiver"
						message="Hi there, yes it is. The rate is 500 per night"
					/>
					<SingleChatMessage
						type="receiver"
						message="Hi there, yes it is. The rate is 500 per night"
					/>
				</div>
			</div>
		</div>
	)
}
