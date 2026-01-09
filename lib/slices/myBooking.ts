import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import apiPath from "../apiPath";
import { IUser } from "@/app/services/AuthContext";
import { getHeaders } from "@/app/mybookings/Mybookings";

interface IApiResponse {
    data: any[];
    success: boolean;
}

interface IApiReports {
    reports: any[];
    success: boolean;
}

interface IAppointmentApiResponse extends IApiResponse {
    userDetails: IUser;
}

export interface MyBookingState {
    userAppointment: IAppointmentApiResponse;
    reportByNumber: IApiReports;
    doneReport: IApiResponse;
}

interface IMyBookingState extends MyBookingState {
    loading: boolean;
    error: string | null;
}

const initialState: IMyBookingState = {
    userAppointment: { data: [], success: false, userDetails: {} as IUser },
    reportByNumber: { reports: [], success: false },
    doneReport: { data: [], success: false },
    loading: false,
    error: null,
};

export const fetchMyBooking = createAsyncThunk(
    "myBooking/fetchMyBooking",
    async (_, { rejectWithValue }) => {
        try {
            const number = localStorage.getItem("number");
            const token = localStorage.getItem("token");

            const headers = getHeaders(token! as string);
            
            if (!number) {
                throw new Error("User number not found in localStorage");
            }


            const parsedNumber = JSON.parse(number);

            const [appointment, report, done] = await Promise.all([
                fetch(`${apiPath}userAppointment/user/${parsedNumber}`, {method:"GET", headers}),
                fetch(`${apiPath}report/getreportsbynum/${parsedNumber}`, {method:"GET", headers}),
                fetch(`${apiPath}report/donereport/${parsedNumber}`, {method:"GET", headers})
            ]);

            if (!appointment.ok || !report.ok || !done.ok) {
                throw new Error("Failed to fetch user data");
            }

            const [userAppointment, reportByNumber, doneReport] = await Promise.all([
                appointment.json(),
                report.json(),
                done.json()
            ]);

            return {
                userAppointment,
                reportByNumber,
                doneReport,
            };
        } catch (error) {
            return rejectWithValue(
                error instanceof Error ? error.message : "Failed to fetch booking data"
            );
        }
    }
);

const myBookingSlice = createSlice({
    name: "myBooking",
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(fetchMyBooking.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMyBooking.fulfilled, (state, action: PayloadAction<MyBookingState>) => {
                state.loading = false;
                state.userAppointment = action.payload.userAppointment;
                state.reportByNumber = action.payload.reportByNumber;
                state.doneReport = action.payload.doneReport;
            })
            .addCase(fetchMyBooking.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string || action.error.message || "Failed to fetch";
            });
    },
});

export default myBookingSlice.reducer;
