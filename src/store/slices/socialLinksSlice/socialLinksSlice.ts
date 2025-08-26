import { createSlice } from "@reduxjs/toolkit";

interface SocialLinksState {
  pulse: boolean;
}

const initialState: SocialLinksState = {
  pulse: false,
};

const socialLinksSlice = createSlice({
  name: "socialLinks",
  initialState,
  reducers: {
    triggerPulse(state) {
      state.pulse = true;
    },
    resetPulse(state) {
      state.pulse = false;
    },
  },
});

export const { triggerPulse, resetPulse } = socialLinksSlice.actions;
export default socialLinksSlice.reducer;
