import Image from "next/image";
import { AddaPlaceDescription } from "@/features/add-a-place/description";
import { SubmitButton } from "@/features/add-a-place";

const apartmentType = [
	"house",
	"duplex",
	"apartment",
	"studio",
	"office",
	"room",
];

const AddaPlace = () => {
	return (
		<div className="flex flex-col justify-center items-center h-full lg:w-[55%] xl:w-2/5 2xl:w-1/4 mx-auto pb-[10%]">
			<AddaPlaceDescription
				description="Which of these best describes your home?"
				progress={10}
				headerClassName="text-center"
			/>
			<div className="grid grid-cols-2 gap-6 w-full my-6">
				{apartmentType.map((item) => (
					<button key={item} className="relative h-[9rem] xl:h-[7.5rem]">
						<Image
							src="/images/listing-1.png"
							alt={item}
							fill
							className="object-cover rounded-lg"
						/>
						<div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
						<div className="absolute inset-0 flex items-center justify-center">
							<span className="text-white text-lg xsm:text-2xl uppercase">
								{item}
							</span>
						</div>
					</button>
				))}
			</div>
			<SubmitButton url="/add-place/offerings" />
		</div>
	);
};

export default AddaPlace;
