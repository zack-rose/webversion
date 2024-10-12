"use client";

import { FaCheck } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { Button } from "@/features/common/components/ui/button";

const AddPlaceThankYou = () => {
	const router = useRouter();
	return (
		<div className="bg-3deg-cream-200 flex flex-col justify-center items-center min-h-[80vh]">
			<div className="w-[90%] md:w-[45%] lg:w-[40%] xl:w-1/3">
				<div
					className="bg-3deg-orange-100 size-12 rounded-full flex justify-between items-center mx-auto"
					style={{
						boxShadow: "0px 0px 0px 6px rgba(216, 112, 74, 0.24)",
					}}
				>
					<FaCheck className="text-2xl text-white mx-auto" />
				</div>

				<h3 className="text-3deg-black-300 text-xl font-bold text-center mt-6 mb-4">
					Thank you for listing your home!
				</h3>

				<p className="text-3deg-choco-650 mb-6 text-center">
					Our team will review within 24 hours and let you know if we need any
					more information.
				</p>

				<Button className="w-full" size="lg" onClick={() => router.push("/")}>
					Continue
				</Button>
			</div>
		</div>
	);
};

export default AddPlaceThankYou;
