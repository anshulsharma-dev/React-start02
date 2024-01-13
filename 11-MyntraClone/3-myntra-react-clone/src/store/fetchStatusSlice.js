import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: 
    {
      fetchDone: false,
      currentlyFetching: false,
    },
  
  reducers: {
    markFetchDone: (state) => {
       state.fetchDone = true;
      // state[0].fetchDone = true;
    },
    fetching : (state) => {
     state.currentlyFetching = true;
    },
    fetchingDone: (state) => {
     state.currentlyFetching = false;
    }
  },
});

export const fetchStatusActions = fetchStatusSlice.actions;

export default fetchStatusSlice;
