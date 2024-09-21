import { PropsWithChildren } from "react";
import Image from "next/image";
import Link, { LinkProps } from "next/link";

import { NavigationLinks, LegalLinks, SocialLinks } from "./footer-links";

export const Footer = () => {
	return (
		<footer className="bg-3deg-greenish-100 content-spacing py-[15%] md:pt-[5%] md:pb-[3%] space-y-10">
			<div className="flex flex-col lg:flex-row gap-6">
				<div className="space-y-4 lg:w-1/4">
					<Link href="/">
						<Image
							src="/images/brand-logo-secondary.svg"
							alt="threedegrees brand"
							width={150}
							height={200}
						/>
					</Link>

					<p className="text-3deg-black-200 text-sm">
						Design amazing digital experiences that create more happy in the
						world.
					</p>
				</div>

				<div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:w-3/4 lg:place-items-center lg:items-start">
					<div className="space-y-4">
						<h6 className="text-3deg-black-200 text-sm">Navigation</h6>

						<div className="space-y-3 flex flex-col">
							{NavigationLinks.map((item) => (
								<FooterLink href={item.href} key={item.title}>
									{item.title}
								</FooterLink>
							))}
						</div>
					</div>

					<div className="space-y-4">
						<h6 className="text-3deg-black-200 text-sm">Legal</h6>

						<div className="space-y-3 flex flex-col">
							{LegalLinks.map((item) => (
								<FooterLink href={item.href} key={item.title}>
									{item.title}
								</FooterLink>
							))}
						</div>
					</div>

					<div className="space-y-4">
						<h6 className="text-3deg-black-200 text-sm">Social</h6>

						<div className="space-y-3 flex flex-col">
							{SocialLinks.map((item) => (
								<a
									target="_blank"
									rel="noopener noreferrer"
									href={item.href}
									key={item.title}
									className="text-3deg-black-100 font-medium text-sm"
								>
									{item.title}
								</a>
							))}
						</div>
					</div>
				</div>
			</div>

			<div className="flex flex-col md:flex-row justify-between items-center md:px-[10%] lg:px-[20%] gap-5">
				<div>
					<h5 className="pb-2 font-medium text-3deg-black-300 text-center">
						iOS
					</h5>
					<Link href="#" passHref legacyBehavior>
						<a target="_blank" rel="noopener noreferrer">
							<Image
								src="/images/download-on-apple-store.svg"
								alt="download-on-apple-store"
								width={130}
								height={100}
							/>
						</a>
					</Link>
				</div>

				<div>
					<h5 className="pb-2 font-medium text-3deg-black-300 text-center">
						Android
					</h5>

					<Link href="#" passHref legacyBehavior>
						<a target="_blank" rel="noopener noreferrer">
							<Image
								src="/images/download-on-google-play-store.svg"
								alt="download-on-google-play-store"
								width={130}
								height={100}
							/>
						</a>
					</Link>
				</div>
			</div>

			<p className="text-center text-3deg-greenish-200 text-sm pt-8">
				&copy; {new Date().getFullYear()} 3 Degrees. All rights reserved.
			</p>
		</footer>
	);
};

const FooterLink = ({ children, ...props }: PropsWithChildren<LinkProps>) => {
	return (
		<Link {...props} className="text-3deg-black-100 font-medium text-sm">
			{children}
		</Link>
	);
};
