import { cn } from "@/features/common/utils";
import { AudioMessagePlayer } from "./audio-message";

interface Props {
	type: "sender" | "receiver";
	message: string;
	messageType?: "text" | "audio";
}

export const SingleChatMessage = ({
	type,
	message,
	messageType = "text",
}: Props) => {
	return (
		<div
			className={cn("p-[0.625rem] space-y-3 max-w-[80%] my-1", {
				"bg-3deg-cream-200 ml-auto rounded-tl-[1.65rem] rounded-b-[1.65rem] rounded-tr-[0.6125rem]":
					type === "sender",
				"bg-3deg-morning-blue-100 rounded-tl-[0.6125rem] rounded-b-[1.65rem] rounded-tr-[1.65rem]":
					type === "receiver",
			})}
		>
			{messageType === "text" && (
				<p
					className={cn("text-sm", {
						"text-3deg-blue-200": type === "sender",
						"text-white": type === "receiver",
					})}
				>
					{message}
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem sit
					excepturi laboriosam vel ab numquam, quos soluta quas vero possimus
					commodi minus earum amet debitis repellat. Aliquid repellendus quos
					expedita.
				</p>
			)}

			{messageType === "audio" && (
				<AudioMessagePlayer type={type} audioSrc={message} />
			)}

			<p
				className={cn("text-xs text-right pb-2", {
					"text-black text-opacity-80": type === "sender",
					"text-white": type === "receiver",
				})}
			>
				4:56pm
			</p>
		</div>
	);
};
