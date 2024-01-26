import React from "react";
import NextImage from "next/image";
import Box from "@mui/material/Box";
import PageLoaderImage from "/public/images/loading.gif";

export default function Loading() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <NextImage
        src={PageLoaderImage}
        alt="Page loader"
        width={110}
        height={110}
        priority
      />
    </Box>
  );
}
