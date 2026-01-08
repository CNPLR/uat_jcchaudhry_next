import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import apiPath from "../apiPath";
import { IApiResponse } from "./blogSlice";

interface HomeVideoState {
    homeVideo: IApiResponse;
    loading: boolean;
    error: string | null;
}

const initialState: HomeVideoState = {
    homeVideo: { data: [], success: false },
    loading: false,
    error: null,
};

export const fetchHomeVideo = createAsyncThunk(
    "homeVideo/fetchHomeVideo",
    async () => {
        const response = await fetch(`${apiPath}getvideosbycategory/category/HomePage`);
        if (!response.ok) throw new Error("Failed to fetch home video");
        return response.json();
    }
);

const homeVideoSlice = createSlice({
    name: "homeVideo",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchHomeVideo.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchHomeVideo.fulfilled, (state, action: PayloadAction<IApiResponse>) => {
                state.loading = false;
                state.homeVideo = action.payload;
            })
            .addCase(fetchHomeVideo.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to fetch";
            });
    },
});

export default homeVideoSlice.reducer;