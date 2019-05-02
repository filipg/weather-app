export interface City {
    cityId?: number;
    city: string;
    longitude: string;
    latitude: string;
}

export interface LatitudeLongitude {
    longitude: number;
    latitude: number;
}

export interface CompareCity {
    cityOneName: string;
    cityOneData: LatitudeLongitude;
    cityTwoName: string;
    cityTwoData: LatitudeLongitude;
}