import { styled } from "@stitches/react";

export const Container = styled("div", {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const Wrapper = styled("div", {
  maxWidth: "1122px",
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  marginTop: "114px",
  marginBottom: "166px",
});

export const Title = styled("h1", {
  color: "#825767",
});

export const GridList = styled("main", {
  width: "100%",
  height: "100%",
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  columnGap: "32px",
  rowGap: "24px",

  // @media (max-width: 1180px) {
  //   grid-template-columns: repeat(3, 1fr);
  // }
});
