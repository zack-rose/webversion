import { Libraries } from "@react-google-maps/api";

export const mapContainerStyle = {
	width: "100%",
	height: "100%",
	borderRadius: "1rem",
};

//London coordinates
export const defaultCenter = {
	lat: 51.5074,
	lng: -0.1278,
};

export const libraries: Libraries = ["places"];

export const circleOptions = {
	strokeColor: "#5184f3",
	strokeOpacity: 0.8,
	strokeWeight: 2,
	fillColor: "#5184f3",
	fillOpacity: 0.35,
	clickable: false,
	draggable: false,
	editable: false,
	visible: true,
	radius: 3000,
	zIndex: 1,
};
