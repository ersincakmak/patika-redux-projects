import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import {
  BaseApiResponse,
  DailyResponse,
  SingularResponse,
} from "../types/covid";

type CountriesType = {
  name: string;
  iso2: string;
  iso3: string;
};

interface initialStateType {
  selected: string;
  countries: CountriesType[];
  daily: [];
  infected: number;
  recovered: number;
  deaths: number;
  active: number;
}

const initialState: initialStateType = {
  selected: "Global",
  countries: [],
  daily: [],
  active: 0,
  deaths: 0,
  infected: 0,
  recovered: 0,
};

export const fetchCountries = createAsyncThunk(
  "covid/fetchCountries",
  async () => {
    const { data } = await axios.request<{
      countries: CountriesType[];
    }>({
      method: "GET",
      url: "https://covid19.mathdro.id/api/countries",
    });

    return data.countries;
  }
);

export const fetchBase = createAsyncThunk("covid/fetchBase", async () => {
  const { data } = await axios.request<BaseApiResponse>({
    method: "GET",
    url: "https://covid19.mathdro.id/api",
  });

  return data;
});

export const fetchDaily = createAsyncThunk("covid/fetchDaily", async () => {
  const { data } = await axios.request<DailyResponse[]>({
    method: "GET",
    url: "https://covid19.mathdro.id/api/daily",
  });

  return data;
});

export const fetchSingular = createAsyncThunk(
  "covid/fetchSingular",
  async (params: string) => {
    const { data } = await axios.request<SingularResponse>({
      method: "GET",
      url: `https://covid19.mathdro.id/api/countries/${params}`,
    });

    return data;
  }
);

export const covidSlice = createSlice({
  name: "covid",
  initialState,
  reducers: {
    setSelected: (state, action: PayloadAction<string>) => {
      state.selected = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCountries.fulfilled, (state, action) => {
      state.countries = action.payload;
    });

    builder.addCase(fetchBase.fulfilled, (state, action) => {
      state.infected = action.payload.confirmed.value;
      state.active =
        action.payload.confirmed.value -
        action.payload.recovered.value -
        action.payload.deaths.value;
      state.deaths = action.payload.deaths.value;
      state.recovered = action.payload.recovered.value;
    });

    builder.addCase(fetchDaily.fulfilled, (state, action) => {
      state.daily = action.payload.map((item) => {
        return {
          name: item.reportDate,
          infected: item.confirmed.total,
          deaths: item.deaths.total,
        };
      }) as any;
    });

    builder.addCase(fetchSingular.fulfilled, (state, action) => {
      state.infected = action.payload.confirmed?.value;
      state.active =
        action.payload.confirmed?.value -
        action.payload.recovered?.value -
        action.payload.deaths?.value;
      state.deaths = action.payload.deaths?.value;
      state.recovered = action.payload.recovered?.value;
    });
  },
});

export const { setSelected } = covidSlice.actions;

export default covidSlice.reducer;
