import { HiPaperClip, HiOutlinePaperAirplane } from "react-icons/hi2"
import { MdMic } from "react-icons/md"

export const ChatInputField = () => {
	return (
		<div className="sticky bottom-0 flex justify-between items-center gap-2">
			<div className="flex items-center w-11/12 xl:w-[95%] bg-3deg-white-100 rounded-3xl p-2 px-3">
				<button className="mr-2">
					<MdMic className="h-6 w-6 text-3deg-orange-100" />
				</button>
				<input
					type="text"
					className="flex-grow bg-transparent rounded-lg px-4 py-1 outline-none text-sm placeholder:text-3deg-cream-100"
					placeholder="Type your message here"
				/>
				<button className="ml-2">
					<HiPaperClip className="text-3deg-cream-100 text-xl" />
				</button>
			</div>

			<div className="flex items-center justify-end w-1/12 xl:w-[5%]">
				<button className="bg-3deg-orange-100 p-2 rounded-full">
					<HiOutlinePaperAirplane className="text-white text-center mx-auto size-5" />
				</button>
			</div>
		</div>
	)
}
