import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import apiPath from "../apiPath";
import { IUser, IUserProfile } from "@/app/services/AuthContext";

interface IApiResponse {
    account:IUserProfile | undefined
    user:IUser | undefined
    success:boolean
}

export interface UserState {
    user: IApiResponse;
    loading: boolean;
    error: string | null;
}

const initialState: UserState = {
    user: {
        account:undefined,
        user:undefined,
        success:false
    },
    loading: false,
    error: null,
};

export const fetchUser = createAsyncThunk(
    "user/fetchUser",
    async () => {
        const number = localStorage.getItem("number");
        const response = await fetch(`${apiPath}websiteuser/${JSON.parse(number as string)}`);
        if (!response.ok) throw new Error("Failed to fetch user");
        return response.json();
    }
);

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUser.fulfilled, (state, action: PayloadAction<IApiResponse>) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to fetch";
            });
    },
});

export default userSlice.reducer;