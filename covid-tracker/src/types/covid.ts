export interface Confirmed {
  value: number;
  detail: string;
}

export interface Recovered {
  value: number;
  detail: string;
}

export interface Deaths {
  value: number;
  detail: string;
}

export interface DailyTimeSeries {
  pattern: string;
  example: string;
}

export interface CountryDetail {
  pattern: string;
  example: string;
}

export interface BaseApiResponse {
  confirmed: Confirmed;
  recovered: Recovered;
  deaths: Deaths;
  dailySummary: string;
  dailyTimeSeries: DailyTimeSeries;
  image: string;
  source: string;
  countries: string;
  countryDetail: CountryDetail;
  lastUpdate: Date;
}

export interface Confirmed {
  value: number;
  detail: string;
}

export interface Recovered {
  value: number;
  detail: string;
}

export interface Deaths {
  value: number;
  detail: string;
}

export interface SingularResponse {
  confirmed: Confirmed;
  recovered: Recovered;
  deaths: Deaths;
  lastUpdate: Date;
}

export interface Confirmed {
  total: number;
  china: number;
  outsideChina: number;
}

export interface DeltaConfirmedDetail {
  total: number;
  china: number;
  outsideChina: number;
}

export interface Deaths {
  total: number;
  china: number;
  outsideChina: number;
}

export interface Recovered {
  total: number;
  china: number;
  outsideChina: number;
}

export interface DailyResponse {
  totalConfirmed: number;
  mainlandChina: number;
  otherLocations: number;
  deltaConfirmed: number;
  totalRecovered: number;
  confirmed: Confirmed;
  deltaConfirmedDetail: DeltaConfirmedDetail;
  deaths: Deaths;
  recovered: Recovered;
  active: number;
  deltaRecovered: number;
  incidentRate: number;
  peopleTested: number;
  reportDate: string;
}
