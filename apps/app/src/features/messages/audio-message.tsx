"use client"

import React, { useRef, useState, useEffect } from "react"
import { cn } from "@/features/common/utils"
import { FaPlay, FaPause } from "react-icons/fa"
import { format } from "date-fns"

import { Slider } from "@/features/common/components/ui/slider"

interface Props {
	audioSrc: string
	type: "sender" | "receiver"
}

export const AudioMessagePlayer = ({ audioSrc, type }: Props) => {
	const audioRef = useRef<HTMLAudioElement>(null)

	const [isPlaying, setIsPlaying] = useState(false)
	const [duration, setDuration] = useState(0)
	const [currentTime, setCurrentTime] = useState(0)
	const [isSeeking, setIsSeeking] = useState(false)

	useEffect(() => {
		const audio = audioRef.current
		if (audio) {
			const handleLoadedMetadata = () => {
				setDuration(audio.duration)
				if (isFinite(audio.duration)) {
					setDuration(audio.duration)
				} else {
					setDuration(0)
				}
			}

			const handleCanPlayThrough = () => {
				if (isFinite(audio.duration) && !isNaN(audio.duration)) {
					setDuration(audio.duration)
				}
			}

			const handleTimeUpdate = () => {
				if (!isSeeking) {
					setCurrentTime(audio.currentTime)
				}
			}

			audio.addEventListener("loadedmetadata", handleLoadedMetadata)
			audio.addEventListener("canplaythrough", handleCanPlayThrough)
			audio.addEventListener("timeupdate", handleTimeUpdate)

			return () => {
				audio.removeEventListener("loadedmetadata", handleLoadedMetadata)
				audio.removeEventListener("canplaythrough", handleCanPlayThrough)
				audio.removeEventListener("timeupdate", handleTimeUpdate)
			}
		}
	}, [isSeeking])

	const togglePlayPause = () => {
		const audio = audioRef.current
		if (audio) {
			if (isPlaying) {
				audio.pause()
			} else {
				audio.play()
			}
			setIsPlaying(!isPlaying)
		}
	}

	const handleSliderChange = (value: number[]) => {
		setCurrentTime(value[0])
		const audio = audioRef.current
		if (audio && duration) {
			audio.currentTime = value[0]
		}
	}

	const handleSliderStart = () => {
		setIsSeeking(true)
		if (audioRef.current) {
			audioRef.current.pause()
		}
	}

	const handleSliderEnd = () => {
		setIsSeeking(false)
		if (audioRef.current) {
			if (isPlaying) {
				audioRef.current.play()
			}
		}
	}

	const formatTime = (time: number) => {
		return format(new Date(time * 1000), "mm:ss")
	}

	return (
		<div className="flex items-center space-x-2 pt-5">
			<button onClick={togglePlayPause} className="focus:outline-none">
				{isPlaying ? (
					<FaPause
						className={cn({
							"text-3deg-blue-200": type === "sender",
							"text-white": type === "receiver",
						})}
					/>
				) : (
					<FaPlay
						className={cn({
							"text-3deg-blue-200": type === "sender",
							"text-white": type === "receiver",
						})}
					/>
				)}
			</button>

			<Slider
				value={[currentTime]}
				onValueChange={handleSliderChange}
				max={duration || 100}
				step={0.1}
				onPointerDown={handleSliderStart}
				onPointerUp={handleSliderEnd}
			/>
			<span
				className={cn("text-xs", {
					"text-3deg-blue-200": type === "sender",
					"text-white": type === "receiver",
				})}
			>
				{formatTime(currentTime)} / {formatTime(duration)}
			</span>
			<audio ref={audioRef} src={audioSrc} preload="metadata" />
		</div>
	)
}
