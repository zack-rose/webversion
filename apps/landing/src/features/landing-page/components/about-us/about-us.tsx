/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export const AboutUs = () => {
	return (
		<section
			className="bg-cover bg-center bg-no-repeat h-full w-full py-[20%] md:py-[5%] px-[10%] flex flex-col-reverse md:grid md:grid-cols-2 gap-y-20 md:gap-6"
			style={{
				backgroundImage: "url('/images/about-3-degrees.png')",
			}}
			id="about"
		>
			<div>
				<div className="bg-3deg-choco-500 rounded-lg p-6 space-y-5">
					<h3 className="text-3xl lg:text-5xl text-3deg-choco-100 uppercase">
						about us
					</h3>
					<p className="text-3deg-black-300">
						Three Degrees is a members network of exceptional homes to rent &
						swap around the world. We think everyone should be able to rent from
						a network they can trust, without sacrificing on style. Which is why
						we vet everyone who applies to our community, so you don't have to.
						Our platform connects members with friends and friends-of-friends to
						help you find beautiful homes to stay in, whether its for a week, a
						month or a year.
					</p>

					<p className="text-3deg-black-300">
						We offer short and long term rentals, and house swaps - the choice
						is yours. From studio apartments to five bedroom townhouses, all we
						look for is homes that are loved and well-cared for. So, whether you
						are looking for a home, have a home to rent or swap, or just curious
						to take a look in to our world, apply today. Renters & owners
						welcome.
					</p>
				</div>

				<div className="flex flex-col md:flex-row justify-between items-center pt-5 md:px-[10%] lg:px-[20%] gap-5">
					{appDownloadInfo.map((info) => (
						<div key={info.label}>
							<h5 className="pb-2 font-medium text-white text-center">
								{info.label}
							</h5>
							<a href={info.url} target="_blank" rel="noopener noreferrer">
								<Image
									src={info.imageUrl}
									alt={info.imageAlt}
									width={130}
									height={100}
								/>
							</a>
						</div>
					))}
				</div>
			</div>

			<div className="place-content-center">
				<div className="relative h-[19rem] w-[15rem] mx-auto">
					<Image src="/images/3-degrees.png" alt="3-degrees" fill />
				</div>
			</div>
		</section>
	);
};

const appDownloadInfo = [
	{
		label: "iOS",
		url: "#",
		imageUrl: "/images/download-on-apple-store.svg",
		imageAlt: "download-on-apple-store",
	},
	{
		label: "Android",
		url: "#",
		imageUrl: "/images/download-on-google-play-store.svg",
		imageAlt: "download-on-google-play-store",
	},
];
