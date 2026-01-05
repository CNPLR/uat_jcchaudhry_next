import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the user profile interface
export interface UserProfile {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  bio: string;
  avatar: string;
}

// Define the initial state
interface ProfileState {
  user: UserProfile | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: ProfileState = {
  user: null,
  isLoading: false,
  error: null,
};

// Create the profile slice
const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    // Set the entire user profile
    setUserProfile: (state, action: PayloadAction<UserProfile>) => {
      state.user = action.payload;
      state.error = null;
    },
    
    // Update specific fields
    updateFirstName: (state, action: PayloadAction<string>) => {
      if (state.user) {
        state.user.firstName = action.payload;
      }
    },
    
    updateLastName: (state, action: PayloadAction<string>) => {
      if (state.user) {
        state.user.lastName = action.payload;
      }
    },
    
    updateEmail: (state, action: PayloadAction<string>) => {
      if (state.user) {
        state.user.email = action.payload;
      }
    },
    
    updatePhoneNumber: (state, action: PayloadAction<string>) => {
      if (state.user) {
        state.user.phoneNumber = action.payload;
      }
    },
    
    updateBio: (state, action: PayloadAction<string>) => {
      if (state.user) {
        state.user.bio = action.payload;
      }
    },
    
    updateAvatar: (state, action: PayloadAction<string>) => {
      if (state.user) {
        state.user.avatar = action.payload;
      }
    },
    
    // Update multiple fields at once
    updateProfile: (state, action: PayloadAction<Partial<UserProfile>>) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
      }
    },
    
    // Set loading state
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    
    // Set error
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    
    // Clear profile
    clearProfile: (state) => {
      state.user = null;
      state.error = null;
    },
  },
});

// Export actions
export const {
  setUserProfile,
  updateFirstName,
  updateLastName,
  updateEmail,
  updatePhoneNumber,
  updateBio,
  updateAvatar,
  updateProfile,
  setLoading,
  setError,
  clearProfile,
} = profileSlice.actions;

// Export reducer
export default profileSlice.reducer;
