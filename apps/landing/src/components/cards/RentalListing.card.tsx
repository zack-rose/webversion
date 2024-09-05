"use client";
import { useState, useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import {
  MdSwapCalls,
  MdOutlineAddBusiness,
  MdOutlineBed,
  MdOutlineShower,
  MdFavorite,
} from "react-icons/md";
import { formatToPounds } from "@/lib/utils";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/features/common/components/ui/carousel";

interface Props {
  title: string;
  location: string;
  rent: number;
}

const RentalListingCard = ({ title, location, rent }: Props) => {
  const [api, setApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleIndicatorClick = (index: number) => {
    api?.scrollTo(index);
  };

  const handleLikeListing = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    e.stopPropagation();
  };

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrentSlide(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrentSlide(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <Link
      href="#"
      className="hover:shadow-lg hover:rounded-lg hover:p-2 hover:transform ease-in-out hover:scale-[1.02] transition-transform duration-500"
    >
      <div className="relative mb-2">
        <Carousel
          setApi={setApi}
          plugins={[
            Autoplay({
              delay: 3500,
            }),
          ]}
        >
          <CarouselContent>
            {CarouselData.map((_item, index) => (
              <CarouselItem key={index}>
                <div className="relative w-[24rem] md:w-full h-[14rem] overflow-hidden">
                  <Image
                    src="/images/listing-1.png"
                    alt="rental listing"
                    fill
                  />

                  <button
                    className="absolute top-4 right-4 bg-3deg-cream-200 size-7 rounded-full flex justify-center items-center outline-none"
                    onClick={handleLikeListing}
                  >
                    <MdFavorite className="text-3deg-choco-400 size-5" />
                  </button>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="absolute hidden md:block space-x-2 bottom-4 md:left-1/2 transform md:-translate-x-1/2">
          {CarouselData.map((_item, index) => (
            <button
              key={index}
              className={clsx("size-2 rounded-full space-x-1", {
                "bg-white": currentSlide === index,
                "bg-3deg-cream-200": currentSlide !== index,
              })}
              onClick={() => handleIndicatorClick(index)}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <h5 className="font-medium text-3deg-black-300">{title}</h5>
        <p className="text-sm text-3deg-black-300">
          {formatToPounds(rent)} p/n
        </p>
      </div>

      <p className="text-sm text-3deg-black-300 truncate pt-1 pb-3">
        {location}
      </p>

      <div className="flex items-center gap-2">
        <div className="flex gap-1 items-center border border-3deg-black-300 rounded-3xl py-1 px-2 cursor-pointer">
          <MdOutlineAddBusiness className="text-3deg-black-300 text-xl" />
          <p className="text-3deg-black-300 text-sm">Rent</p>
        </div>

        <div className="flex gap-1 items-center border border-3deg-black-300 rounded-3xl py-1 px-2 cursor-pointer">
          <MdSwapCalls className="text-3deg-black-300 text-xl" />
          <p className="text-3deg-black-300 text-sm">Rent</p>
        </div>

        <div className="flex gap-1 items-center border border-3deg-black-300 rounded-3xl py-1 px-2 cursor-pointer">
          <MdOutlineBed className="text-3deg-black-300 text-xl" />
          <p className="text-3deg-black-300 text-sm">2</p>
        </div>

        <div className="flex gap-2 items-center border border-3deg-black-300 rounded-3xl py-1 px-2 cursor-pointer">
          <MdOutlineShower className="text-3deg-black-300 text-xl" />
          <p className="text-3deg-black-300 text-sm">1</p>
        </div>
      </div>
    </Link>
  );
};

export const RentalListings = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 max-w-full overflow-hidden">
      {ListingData.map((item, i) => (
        <RentalListingCard key={i} {...item} />
      ))}
    </div>
  );
};

const CarouselData = Array.from({ length: 5 });

const SampleData = {
  title: "West Hollywood",
  location:
    "65 Camberwell Church St. Peckham, Greater London, SE5 8TR, United Kingdom",
  rent: 175,
} satisfies Props;

const ListingData: Props[] = Array.from({ length: 6 }, () => ({
  ...SampleData,
}));
