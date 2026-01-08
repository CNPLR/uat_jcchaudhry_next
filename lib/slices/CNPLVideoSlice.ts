import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit'
import apiPath from '../apiPath'
import { IApiResponse } from './blogSlice'


interface CNPLVideoState {
    CNPLVideo: IApiResponse,
    loading: boolean,
    error: string | null,
}

const initialState: CNPLVideoState = {
    CNPLVideo: { data: [], success: false },
    loading: false,
    error: null,
}

export const fetchCNPLVideo = createAsyncThunk(
    "CNPLVideo/fetchCNPLVideo",
    async () => {
        const response = await fetch(`${apiPath}getvideosbycategory/category/CNPL`);
        if (!response.ok) throw new Error("Failed to fetch CNPL video");
        return response.json();
    }
);

const CNPLVideoSlice = createSlice({
    name: "CNPLVideo",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCNPLVideo.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCNPLVideo.fulfilled, (state, action: PayloadAction<IApiResponse>) => {
                state.loading = false;
                state.CNPLVideo = action.payload;
            })
            .addCase(fetchCNPLVideo.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to fetch";
            });
    },
});

export default CNPLVideoSlice.reducer