"use client";

import { useEffect, useMemo, useState } from "react";
import {
	GoogleMap,
	useJsApiLoader,
	Marker,
	Circle,
} from "@react-google-maps/api";
import usePlacesAutocomplete, {
	getGeocode,
	getLatLng,
} from "use-places-autocomplete";

import { TabPill } from "@/features/common/components/tab-pill";
import { RentalListingCard } from "@/features/common/components/cards";
import { ListingData } from "@/features/feed/components/sample-data";
import {
	mapContainerStyle,
	defaultCenter,
	libraries,
	circleOptions,
} from "./map-utils";
import { AutoCompletePlacesCombobox } from "@/features/common/components/ui/autocomplete-places-combobox";

const locationTypes = ["homes", "restaurants", "coffee", "bars"] as const;
type LocationType = (typeof locationTypes)[number];

export const MapSectionContainer = () => {
	const [locationType, setLocationType] = useState<LocationType>("homes");
	const [center, setCenter] = useState(defaultCenter);

	const { isLoaded, loadError } = useJsApiLoader({
		googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY || "",
		libraries,
	});

	const {
		ready,
		suggestions: { data },
		setValue,
		clearSuggestions,
	} = usePlacesAutocomplete();

	const handleSelect = async (address: string) => {
		setValue(address, false);
		clearSuggestions();

		try {
			const results = await getGeocode({ address });
			const { lat, lng } = await getLatLng(results[0]);
			setCenter({ lat, lng });
		} catch (error) {
			console.error("Error: ", error);
		}
	};

	useEffect(() => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					setCenter({
						lat: position.coords.latitude,
						lng: position.coords.longitude,
					});
				},
				() => {
					// If user denies geolocation, keep default center (London)
					setCenter(defaultCenter);
				}
			);
		} else {
			// Browser doesn't support Geolocation
			setCenter(defaultCenter);
		}
	}, []);

	const placesData = useMemo(() => {
		const places = data.map(({ place_id, description }) => ({
			label: description,
			value: description,
			key: place_id,
		}));

		return places || [];
	}, [data]);

	return (
		<div className="flex flex-col gap-5 md:flex-row h-full md:h-[80svh]">
			<section className="md:w-2/5 xl:w-[30%] custom-scrollbar">
				<AutoCompletePlacesCombobox
					options={placesData}
					emptyMessage="No results"
					placeholder="What are you looking for?"
					isLoading={!ready}
					disabled={!ready}
					onValueChange={(e) => setValue(e)}
					onSelectOption={(e) => handleSelect(e.value)}
				/>

				<div className="flex gap-4 flex-wrap mt-4">
					{locationTypes.map((item) => (
						<TabPill
							key={item}
							value={item}
							onClick={() => setLocationType(item)}
							isSelected={item === locationType}
							className="capitalize border-3deg-choco-300"
						/>
					))}
				</div>

				<div className="hidden md:flex flex-col gap-5 mt-6">
					{ListingData.map((item, i) => (
						<RentalListingCard key={i} {...item} />
					))}
				</div>
			</section>

			<section className="md:w-3/5 xl:w-[70%]">
				{loadError && <div>Error loading maps</div>}

				{!isLoaded && <div>Loading Maps...</div>}

				{!loadError && isLoaded && (
					<div className="w-full h-[80vh] md:h-full rounded-lg">
						<GoogleMap
							mapContainerStyle={mapContainerStyle}
							center={center}
							zoom={12}
							options={{
								disableDefaultUI: true,
								zoomControl: true,
							}}
						>
							<Circle
								center={center}
								options={circleOptions}
								radius={1 * 1000}
							/>
							<Marker position={center} />
						</GoogleMap>
					</div>
				)}
			</section>
		</div>
	);
};
