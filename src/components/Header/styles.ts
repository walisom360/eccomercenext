import { styled } from "@stitches/react";

export const Container = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  zIndex: 5,
  position: "fixed",
  background: "#ffffff",
  height: "5rem",
});

export const Typography = styled("h1", {
  fontFamily: "Saira Stencil One",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "40px",
  display: "flex",
  alignItems: "center",
  color: "#5d5d6d",
});

export const HeaderStyled = styled("header", {
  maxWidth: "1122px",
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const Items = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});

export const SearchContainer = styled("div", {
  width: "352px",
  maxHeight: "42px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  background: "#f3f5f6",
  borderRadius: "8px",
  marginRight: "24px",
  padding: "9px 16px",

  // div.search {
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  // }
});

export const Input = styled("input", {
  width: "206px",
  fontFamily: "Saira",
  outline: 0,
  border: 0,
  background: "transparent",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "22px",
});
