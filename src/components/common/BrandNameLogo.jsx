"use client";
import {
  hdlClickRadioBtn,
  hdlDrawerOpen,
  hdlExpandedNavItems,
  hdlSelectedNavItems,
} from "@/lib/rtk/features/common/dashboardSlice";
import { Box, Typography } from "@mui/material";
import NextImage from "next/image";
import NextLink from "next/link";
import {
  MdOutlineClose,
  MdOutlineRadioButtonChecked,
  MdOutlineRadioButtonUnchecked,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

export default function BrandNameLogo() {
  const { drawerOpen } = useSelector((state) => state.dashboard);
  const dispatch = useDispatch();
  const hdlCloseDrawer = () => {
    dispatch(hdlDrawerOpen(false));
    dispatch(hdlClickRadioBtn(true));
    dispatch(hdlSelectedNavItems([]));
    dispatch(hdlExpandedNavItems([]));
  };
  return (
    <Box
      sx={{
        ".lg-icon": {
          display: { xs: "none", lg: "block" },
        },
        ".xs-icon": {
          display: { lg: "none" },
        },
      }}
      className="logo-name"
    >
      <NextLink href="/">
        <Box
          component="figure"
          sx={{ maxWidth: "42px", pl: "1px", flexShrink: "0" }}
        >
          <NextImage
            src="/images/logo/walton-logo-white.png"
            alt="walton-logo"
            width="300"
            height="300"
          />
        </Box>{" "}
        <Typography
          sx={{
            color: "white",
            fontSize: "18px",
            whiteSpace: "nowrap",
          }}
          variant="h6"
          title={"OSS"}
        >
          One Stop Solution
        </Typography>
      </NextLink>
      {drawerOpen ? (
        <>
          <MdOutlineRadioButtonChecked
            className="lg-icon"
            onClick={() => {
              hdlCloseDrawer();
            }}
          />
          <MdOutlineClose
            className="xs-icon"
            onClick={() => {
              hdlCloseDrawer();
            }}
          />
        </>
      ) : (
        <MdOutlineRadioButtonUnchecked
          className="lg-icon"
          onClick={() => {
            dispatch(hdlDrawerOpen(true));
          }}
        />
      )}
    </Box>
  );
}
