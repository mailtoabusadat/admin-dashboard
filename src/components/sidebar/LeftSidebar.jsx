"use client";
import {
  hdlDrawerOpen,
  hdlClickRadioBtn,
  hdlExpandedNavItems,
  hdlSelectedNavItems,
} from "@/lib/rtk/features/common/dashboardSlice";
import { Box, Drawer } from "@mui/material";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function NavSidebar({ children }) {
  const {
    drawerOpen,
    drawerOpenWidth,
    drawerCloseWidth,
    clickRadioBtn,
    expandedNavItemsBackUp,
    selectedNavItemsBackUp,
  } = useSelector((state) => state.dashboard);

  const asideElement = useRef();
  const dispatch = useDispatch();

  const hdlMouseEnter = () => {
    if (!clickRadioBtn && !drawerOpen) {
      asideElement.current.classList.add("aside-hover");
      dispatch(hdlSelectedNavItems(selectedNavItemsBackUp));
      dispatch(hdlExpandedNavItems(expandedNavItemsBackUp));
    }
  };

  const hdlMouseLeave = () => {
    dispatch(hdlClickRadioBtn(false));
    asideElement.current.classList.remove("aside-hover");
    if (!drawerOpen) {
      dispatch(hdlSelectedNavItems([]));
      dispatch(hdlExpandedNavItems([]));
    }
  };

  return (
    <Box
      component="aside"
      ref={asideElement}
      onMouseEnter={hdlMouseEnter}
      onMouseLeave={hdlMouseLeave}
      className={drawerOpen ? "active" : ""}
      sx={{
        ".MuiDrawer-paper": {
          width: `${drawerCloseWidth}px`,
        },
        "&.aside-hover,&.active": {
          ".MuiDrawer-paper": {
            width: `${drawerOpenWidth}px`,
          },
        },
      }}
    >
      <Drawer
        anchor="left"
        variant="permanent"
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        open={drawerOpen}
        onClose={() => dispatch(hdlDrawerOpen(false))}
        sx={{
          display: { xs: "none", lg: "block" },
        }}
      >
        {children}
      </Drawer>
      <Drawer
        anchor="left"
        variant="temporary"
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        open={drawerOpen}
        onClose={() => dispatch(hdlDrawerOpen(false))}
        sx={{
          display: { xs: "block", lg: "none" },
        }}
      >
        {children}
      </Drawer>
    </Box>
  );
}
