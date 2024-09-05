import Image from "next/image";
import Link from "next/link";
import { LinkButton } from "@/components/common";
import { HiArrowRight } from "react-icons/hi2";

import {
  HowItWorksCard,
  HowItWorksContent,
  RentalListings,
} from "@/components/cards";
import { OutlineButton } from "@/features/common/components/outline-button";

export default function Home() {
  return (
    <main>
      <section
        className="bg-cover bg-center bg-no-repeat h-svh w-full flex flex-col items-center"
        style={{
          backgroundImage: "url('/images/hero.png')",
        }}
      >
        <div className="flex flex-wrap gap-3 items-center justify-center pt-8">
          <OutlineButton variant="tertiary" asChild>
            <Link href="#how-it-works">How it Works</Link>
          </OutlineButton>
          <LinkButton href="#" variant="tertiary">
            About
          </LinkButton>
          <LinkButton href="#" variant="tertiary">
            Apply now
          </LinkButton>
        </div>

        <div className="flex flex-col place-items-center mt-auto mb-auto">
          <div className="relative w-[15rem] xxsm:w-[20rem] md:w-[33rem] h-[5rem] md:h-[6.4rem]">
            <Image src="/images/brand-logo.png" alt="" fill />
          </div>

          <p className="text-white text-center py-5 font-medium">
            A members network of beautiful homes to rent and swap
          </p>

          <LinkButton href="#" variant="primary">
            Apply now
          </LinkButton>
        </div>
      </section>

      <section
        className="bg-3deg-cream-200 content-spacing pt-10 pb-[15%]"
        id="how-it-works"
      >
        <div>
          <h3 className="text-4xl text-3deg-choco-100 pb-6 uppercase">
            How it Works
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
            {HowItWorksContent.map((item) => (
              <HowItWorksCard key={item.title} {...item} />
            ))}
          </div>
        </div>

        <div className="pt-11">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-4xl text-3deg-choco-100 uppercase">Browse</h3>

            <LinkButton
              href="#"
              variant="tertiary"
              className="border-3deg-choco-300 text-3deg-choco-100 flex items-center gap-2 px-3 py-[0.3rem]"
            >
              See all <HiArrowRight />
            </LinkButton>
          </div>

          <RentalListings />
        </div>
      </section>
    </main>
  );
}
