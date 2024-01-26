import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  drawerOpen: false,
  drawerOpenWidth: 260,
  drawerCloseWidth: 60,
  clickRadioBtn: false,
  expandedNavItems: [],
  selectedNavItems: [],
  expandedNavItemsBackUp: [],
  selectedNavItemsBackUp: [],
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    hdlDrawerOpen: (state, action) => {
      state.drawerOpen = action.payload;
    },
    hdlClickRadioBtn: (state, action) => {
      state.clickRadioBtn = action.payload;
    },
    hdlExpandedNavItems: (state, action) => {
      state.expandedNavItems = action.payload;
    },
    hdlSelectedNavItems: (state, action) => {
      state.selectedNavItems = action.payload;
    },
    hdlExpandedNavItemsBackUp: (state, action) => {
      state.expandedNavItemsBackUp = action.payload;
    },
    hdlSelectedNavItemsBackUp: (state, action) => {
      state.selectedNavItemsBackUp = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  hdlDrawerOpen,
  hdlClickRadioBtn,
  hdlExpandedNavItems,
  hdlSelectedNavItems,
  hdlExpandedNavItemsBackUp,
  hdlSelectedNavItemsBackUp,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;
