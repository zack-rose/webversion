"use client"

import Image from "next/image"
import { MdArrowBackIos } from "react-icons/md"
import { useRouter } from "next/navigation"

export const ChatHeader = () => {
	const router = useRouter()

	const isRandom = Math.random()
	const isOnline = isRandom > 0.5

	return (
		<div className="flex items-center gap-2">
			<button onClick={() => router.back()}>
				<MdArrowBackIos className="size-5 text-3deg-blue-100 lg:hidden" />
			</button>
			<div className="size-11 relative">
				<Image
					src="/images/avatar.jpeg"
					alt="user avatar"
					className="rounded-full border-2 border-3deg-orange-100"
					fill
				/>
				<div className="absolute right-0 bottom-0 size-3 rounded-full bg-3deg-orange-100"></div>
			</div>
			<div className="">
				<h4 className="text-3deg-blue-100 font-medium capitalize">
					Jane Cruise
				</h4>
				{isOnline && <p className="text-xs text-3deg-orange-100">Active now</p>}
			</div>
		</div>
	)
}
