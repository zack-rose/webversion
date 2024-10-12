import { MessagesLayout as MessageLayout } from "@/features/messages"

const MessagesLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode
}>) => {
	return <MessageLayout>{children}</MessageLayout>
}

export default MessagesLayout
