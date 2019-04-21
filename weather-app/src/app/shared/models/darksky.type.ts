export interface DarkSkyCurrently {
    apparentTemperature: number,
    cloudCover: number,
    dewPoint: number,
    humidity: number,
    icon: string,
    nearestStormBearing: number,
    nearestStormDistance: number,
    ozone: number,
    precipIntensity: number,
    precipProbability: number,
    pressure: number,
    summary: string,
    temperature: number,
    time: number,
    uvIndex: number,
    visibility: number,
    windBearing: number,
    windGust: number,
    windSpeed: number
}

export interface DarkSkyHourly {
    summary: string,
    icon: string,
    data: DarkSkyHourlyData[]
}

export interface DarkSkyHourlyData {
    time: number,
    summary: string,
    icon: string,
    precipIntensity: number,
    precipProbability: number,
    precipType: string,
    temperature: number,
    apparentTemperature: number,
    dewPoint: number,
    humidity: number,
    pressure: number,
    windSpeed: number,
    windGust: number,
    windBearing: number,
    cloudCover: number,
    uvIndex: number,
    visibility: number,
    ozone: number
}

export interface DarkSkyDaily {
    summary: string,
    icon: string,
    data: DarkSkyDailyData[]
}

export interface DarkSkyDailyData {
    time: number,
    summary: string,
    icon: string,
    sunriseTime: number,
    sunsetTime: number,
    moonPhase: number,
    precipIntensity: number,
    precipIntensityMax: number,
    precipIntensityMaxTime: number,
    precipProbability: number,
    precipType: string,
    temperatureHigh: number,
    temperatureHighTime: number,
    temperatureLow: number,
    temperatureLowTime: number,
    apparentTemperatureHigh: number,
    apparentTemperatureHighTime: number,
    apparentTemperatureLow: number,
    apparentTemperatureLowTime: number,
    dewPoint: number,
    humidity: number,
    pressure: number,
    windSpeed: number,
    windGust: number,
    windGustTime: number,
    windBearing: number,
    cloudCover: number,
    uvIndex: number,
    uvIndexTime: number,
    visibility: number,
    ozone: number,
    temperatureMin: number,
    temperatureMinTime: number,
    temperatureMax: number,
    temperatureMaxTime: number,
    apparentTemperatureMin: number,
    apparentTemperatureMinTime: number,
    apparentTemperatureMax: number,
    apparentTemperatureMaxTime: number
}

export interface DarkSkyResponse {
    currently: DarkSkyCurrently,
    hourly: DarkSkyHourly,
    daily: DarkSkyDaily
}
