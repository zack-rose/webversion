"use client"

import { ChatHeader, ChatContainer, ChatInputField } from "@/features/messages"

const SingleUserMessages = () => {
	return (
		<section className="space-y-4">
			<div className="h-4/5 max-h-[80%] space-y-4">
				<ChatHeader />
				<ChatContainer />
			</div>

			<div className="h-1/5 max-h-[20%]">
				<ChatInputField />
			</div>
		</section>
	)
}

export default SingleUserMessages
