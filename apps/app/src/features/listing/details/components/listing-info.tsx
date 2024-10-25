import Link from "next/link";
import Image from "next/image";
import {
	MdSwapCalls,
	MdOutlineAddBusiness,
	MdOutlineBed,
	MdOutlineShower,
} from "react-icons/md";
import { HiHeart, HiOutlineArrowUpOnSquare, HiStar } from "react-icons/hi2";

import { Button } from "@/features/common/components/ui/button";

import { Pill } from "@/features/common/components/Pill";
import { formatCurrency } from "@/features/common/utils";
import { LocationCombobox } from "@/features/home/components/search/location-combobox";
import { AnywhereDropdown } from "@/features/home/components/search/anywhere-dropdown";
import { Avatar } from "@/features/common/components/avatar";
import { OutlineButton } from "@/features/common/components/outline-button";
import { FormProgress } from "@/features/add-a-place/form-progress/FormProgress";

export const ListingInfo = () => {
	return (
		<div>
			<div className="flex flex-col md:flex-row gap-5 xl:gap-[15%]">
				<div className="md:w-3/5 xl:w-[60%]">
					<div className="flex justify-between items-center">
						<h5 className="font-medium text-3deg-black-300 text-3xl">
							West Hollywood
						</h5>
						<p className="text-3deg-black-100 text-lg">
							{formatCurrency(175)} p/n
						</p>
					</div>

					<p className="text-sm text-3deg-black-300 truncate pt-1 pb-3">
						65 Camberwell Church St. Peckham, Greater London, SE5 8TR, United
						Kingdom
					</p>

					<div className="flex items-center gap-2 mb-8">
						<Pill>
							<MdOutlineAddBusiness className="text-3deg-black-300 text-xl" />
							<p className="text-3deg-black-300 text-sm">Rent</p>
						</Pill>

						<Pill>
							<MdSwapCalls className="text-3deg-black-300 text-xl" />
							<p className="text-3deg-black-300 text-sm">Rent</p>
						</Pill>

						<Pill>
							<MdOutlineBed className="text-3deg-black-300 text-xl" />
							<p className="text-3deg-black-300 text-sm">2</p>
						</Pill>

						<Pill>
							<MdOutlineShower className="text-3deg-black-300 text-xl" />
							<p className="text-3deg-black-300 text-sm">1</p>
						</Pill>
					</div>

					<Button className="w-full">Message the owner</Button>
				</div>

				<div className="md:w-2/5 xl:w-[25%] bg-3deg-cream-450 rounded-lg p-5 space-y-4">
					<div className="flex justify-end gap-4">
						<button className="bg-black bg-opacity-35 p-2 rounded-full">
							<HiOutlineArrowUpOnSquare className="text-xl text-white" />
						</button>
						<button className="bg-black bg-opacity-35 p-2 rounded-full">
							<HiHeart className="text-xl text-white" />
						</button>
					</div>

					<LocationCombobox buttonClassName="md:!w-full" />
					<AnywhereDropdown buttonClassName="md:!w-full" />
					<Button className="w-full" variant="primary">
						Check availability
					</Button>
				</div>
			</div>

			<div className="lg:w-3/5 xl:w-[55%] mt-4 space-y-9">
				<div className="space-y-3">
					<h3 className="text-3deg-black-300 text-3xl">
						What you need to know:
					</h3>
					<ul className="list-disc list-inside">
						<li className="text-sm text-3deg-black-300">Rental</li>
						<li className="text-sm text-3deg-black-300">House Swap</li>
						<li className="text-sm text-3deg-black-300">Availiable</li>
						<li className="text-sm text-3deg-black-300">
							Two weeks with an option to extend
						</li>
						<li className="text-sm text-3deg-black-300">Bills Not Included</li>
						<li className="text-sm text-3deg-black-300">
							Separate shower and toilet rooms
						</li>
						<li className="text-sm text-3deg-black-300">
							One double bedroom, second bedroom with a sofa bed that fits 2
						</li>
					</ul>
				</div>

				<div className="space-y-3">
					<h3 className="text-3deg-black-300 text-3xl">
						A note about the home:
					</h3>

					<p className="text-3deg-black-300 text-sm line-clamp-4">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
						ducimus molestiae eveniet aliquid delectus culpa. Quasi harum
						placeat dolorem illo rem dicta? Temporibus, nulla, consequatur illum
						odio fugiat non iure delectus architecto sint cum, reiciendis
						corrupti hic quisquam quae? Animi ab illo accusamus vero, eum
						tempore incidunt, odit quibusdam eius mollitia itaque error optio
						quisquam nobis cumque! Quasi iure, incidunt illum, esse voluptates
						ea harum excepturi omnis deserunt non neque consequuntur soluta,
						corrupti laborum architecto velit et doloremque culpa expedita!
						Impedit doloremque molestiae quo. Blanditiis illo, numquam possimus
						veritatis nesciunt alias officiis laudantium? Enim suscipit impedit
						quo delectus quas laborum.
					</p>
				</div>

				<div className="space-y-4">
					<h3 className="text-3deg-black-300 text-3xl">About the owner:</h3>

					<div className="flex justify-between items-center">
						<div className="flex items-center gap-3">
							<Avatar
								src="/images/avatar.jpeg"
								className="size-14 mt-1"
								alt="user avatar"
							/>
							<p className="text-3deg-black-100 font-medium">Kyle Silva</p>
						</div>

						<OutlineButton
							variant="tertiary"
							className="border-3deg-choco-300 text-3deg-choco-100 px-4 py-[0.3rem]"
						>
							<Link href="#" className="flex items-center gap-2">
								View profile
							</Link>
						</OutlineButton>
					</div>
				</div>

				<div className="space-y-4">
					<h3 className="text-3deg-black-300 text-3xl">Property features:</h3>

					<div className="flex flex-wrap gap-3">
						{propertyFeatures.map((item) => (
							<Pill
								key={item}
								className="border-3deg-choco-300 text-3deg-choco-100 px-4 text-sm font-medium"
							>
								{item}
							</Pill>
						))}
					</div>
				</div>

				<div className="space-y-3">
					<h3 className="text-3deg-black-300 text-3xl">Location:</h3>
					<p className="text-3deg-black-300 text-sm">
						Located within the trendy 9 streets boutique neighborhood
					</p>

					<div className="relative w-full h-[25rem]">
						<Image
							src="/images/map.png"
							alt=""
							fill
							className="rounded-lg object-cover"
						/>
					</div>
				</div>

				<div className="space-y-3">
					<div className="flex justify-between items-center">
						<h3 className="text-3deg-black-300 text-3xl">Rating:</h3>

						<div className="flex items-center text-3deg-orange-100 gap-2">
							<p className="text-sm font-medium">4.7</p>
							<HiStar className="text-lg" />
						</div>
					</div>

					<h6 className="text-3deg-black-300 text-sm font-medium">
						Overall rating
					</h6>

					<div>
						{arrayNumbers.map((item, index) => (
							<div className="flex gap-4 items-center" key={index}>
								<p className="text-black text-sm">{item}</p>
								<div className="w-full">
									<FormProgress progressValue={50} />
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

const propertyFeatures = [
	"Coffee Machine",
	"Lots of natural light",
	"Wi-Fi",
	"TV",
	"Dryer",
	"Dishwasher",
];

function listNumbers() {
	const result = [];
	for (let i = 5; i >= 1; i--) {
		result.push(i);
	}
	return result;
}

const arrayNumbers = listNumbers();
