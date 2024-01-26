"use client";
import { hdlDrawerOpen } from "@/lib/rtk/features/common/dashboardSlice";
import { AppBar, Box, Container, Grid } from "@mui/material";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import UserPanel from "./UserPanel";
export default function AppBarComp() {
  const { drawerOpen, drawerOpenWidth, drawerCloseWidth } = useSelector(
    (state) => state.dashboard
  );
  const dispatch = useDispatch();
  return (
    <Container
      maxWidth="false"
      sx={{ position: "sticky", top: "0px", bgcolor: "white", pt: "20px" }}
    >
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}>
          <AppBar
            position="sticky"
            top="20px"
            color="transparent"
            sx={{
              width: "auto",
              ml: {
                lg: drawerOpen
                  ? `${drawerOpenWidth}px`
                  : `${drawerCloseWidth}px`,
              },
              transition: "margin linear 0.3s",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                py: 1,
                px: 3,
              }}
            >
              <Box sx={{ svg: { display: { lg: "none" }, cursor: "pointer" } }}>
                <GiHamburgerMenu
                  onClick={() => {
                    dispatch(hdlDrawerOpen(true));
                  }}
                />
              </Box>
              <Box>
                <UserPanel />
              </Box>
            </Box>
          </AppBar>
        </Grid>
      </Grid>
    </Container>
  );
}
