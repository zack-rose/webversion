import { MessagesLayout } from "@/features/messages"

const SingleUserMessagesLayout = ({
	children,
	params,
}: Readonly<{
	children: React.ReactNode
	params: { id: string }
}>) => {
	const { id } = params

	return (
		<MessagesLayout chatListContainerClassName="hidden lg:block">
			{children}
		</MessagesLayout>
	)
}

export default SingleUserMessagesLayout
