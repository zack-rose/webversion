/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/features/common/components/ui/accordion";

const MemberResources = () => {
	return (
		<div>
			<div className="pb-[5%] content-spacing bg-3deg-cream-200">
				<div className="mb-11">
					<h1 className="uppercase text-3deg-choco-100 text-2xl xsm:!text-4xl py-8 mb-6">
						member Resources
					</h1>

					<>
						<div className="flex justify-between items-center mb-4">
							<h5 className="text-3deg-black-300 font-semibold">
								Getting started
							</h5>
							<Link href="#" className="text-3deg-orange-200 font-medium">
								View all guides
							</Link>
						</div>

						<div className="grid md:grid-cols-3 gap-4">
							{Array.from({ length: 3 }).map((_item, i) => (
								<div key={i}>
									<div className="relative h-[15rem]">
										<Image
											src="/images/listing-1.png"
											alt="getting started resources"
											fill
											className="object-cover rounded-lg"
										/>
									</div>

									<div className="mt-4">
										<h3 className="text-3deg-black-300 font-medium">
											Hosting for the first time?{" "}
										</h3>
										<p className="pt-2 text-sm text-3deg-black-300">
											We’ve thought of everything. Designed for people, not
											property managers.
										</p>
									</div>
								</div>
							))}
						</div>
					</>
				</div>

				<div>
					<div className="flex justify-between items-center mb-4">
						<h5 className="text-3deg-black-300 font-semibold">Perks</h5>
						<Link href="#" className="text-3deg-orange-200 font-medium">
							View all perks
						</Link>
					</div>

					<div className="grid md:grid-cols-2 xl:grid-cols-4 gap-3">
						{Array.from({ length: 4 }).map((_item, i) => (
							<div
								key={i}
								className="p-4 border border-3deg-greenish-100 rounded-lg"
							>
								<h4 className="text-3deg-black-300 font-medium">
									Hosting for the first time?{" "}
								</h4>
								<p className="pt-1 text-3deg-black-300 text-sm">
									We’ve thought of everything. Designed for people, not property
									managers.
								</p>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className="content-spacing bg-3deg-greenish-100 pt-8 pb-16 border-b border-3deg-greenish-400">
				<h5 className="text-3deg-black-100 font-semibold ">FAQ</h5>

				<Accordion type="single" collapsible className="w-full">
					{accordionContent.map((item, i) => (
						<AccordionItem
							key={i}
							value={`item-${i}`}
							className="border-3deg-greenish-400"
						>
							<AccordionTrigger className="text-3deg-black-100 font-medium text-sm hover:no-underline">
								{item}
							</AccordionTrigger>
							<AccordionContent className="text-sm text-3deg-black-100">
								You can book a trip by going to our Mobile App (iOS or Android).
								Once downloaded, we recommend getting started by exploring all
								of our great homes! You can add a trip to your wishlist directly
								by clicking the "+" button! Because we are a community of
								primary homes, our inventory is changing daily. By opening a
								wishlist, you will get a notification for any new match, as soon
								as it pops up!
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</div>
	);
};

export default MemberResources;

const accordionContent = [
	"How do I book a trip?",
	"How does hosting work?",
	"Can I bring pets on my trip?",
	"Can I list multiple homes?",
	"Can I take my own home profile photos?",
	"How do I join?",
];
