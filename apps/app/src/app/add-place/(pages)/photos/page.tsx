"use client";

import Image from "next/image";
import { FaPlus } from "react-icons/fa6";
import { HiXMark } from "react-icons/hi2";

import { SubmitButton } from "@/features/add-a-place";
import { FormProgress } from "@/features/add-a-place/form-progress/FormProgress";
import { useUploadFile } from "@/hooks/useUploadFile";

const AddPlacePhotos = () => {
	const { getInputProps, getRootProps } = useUploadFile({});

	return (
		<section className="flex flex-col justify-center items-center h-full md:w-[60%] lg:w-[45%] xl:w-1/3 2xl:w-1/4 mx-auto pb-[10%]">
			<div>
				<h2 className="text-3deg-black-300 text-2xl md:text-3xl lg:text-4xl text-center">
					Upload photos
				</h2>
				<p className="text-3deg-choco-650 my-2 text-sm md:text-base text-center">
					These can be taken on a phone, make sure your space is clean, well lit
					and the images are not blurry. If you would like professional photos
					to be taken and added later, we can arrange this for you!
				</p>
				<FormProgress progressValue={80} />
			</div>

			<div className="grid grid-cols-2 gap-3 my-6">
				<button
					className="size-[12rem] rounded-lg border border-3deg-choco-300 bg-3deg-greenish-100 bg-opacity-[47%]"
					{...getRootProps()}
				>
					<input {...getInputProps()} />
					<FaPlus className="mx-auto text-lg text-3deg-greenish-300" />
				</button>

				{Array.from({ length: 3 }).map((_item, i) => (
					<div className="relative size-[12rem]" key={i}>
						<Image
							className="rounded-lg"
							alt=""
							src="/images/listing-1.png"
							fill
						/>

						<button className="absolute top-4 right-4 size-6 bg-black bg-opacity-[0.27] rounded-full flex justify-between items-center">
							<HiXMark className="text-white text-lg mx-auto" />
						</button>
					</div>
				))}
			</div>

			<SubmitButton url="/add-place/pricing" />
		</section>
	);
};

export default AddPlacePhotos;
