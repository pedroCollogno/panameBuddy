export interface FavoriteStation {
	rating: number;
	name: string;
}

interface Geometry {
	coordinates: Array<number>;
}
export interface RecordData {
	geometry: Geometry;
	recordid: number;
}
