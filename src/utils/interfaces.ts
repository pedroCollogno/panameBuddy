export interface FavoriteStation {
	rating: number;
	name: string;
}

interface Geometry {
	coordinates: Array<number>;
}

export interface MarkerData {
	lng: number;
	lat: number;
	recordid: number;
}
export interface RecordData {
	geometry: Geometry;
	recordid: number;
}
