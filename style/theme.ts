import { DefaultTheme } from "styled-components";
export const breakpoints = {
  mini: 486,
  mobile: 576,
  tablet: 768,
  bigTablet: 992,
  laptop: 1200,
  desktop: 1550,
};

const { mini, mobile, tablet, bigTablet, laptop, desktop } = breakpoints;
export const theme: DefaultTheme = {
  name: "Main",
  // palette: {
  //   green100: "#00C8AA",
  //   blue100: "#2CACD5",
  //   black100: "#304040",
  //   black200: "#303030",
  //   black300: "#333333",
  //   bootstrapDark: "#343a40",
  //   red100: "#E46363",
  // },
  fontSize: {
    xxs: "0.9rem",
    xs: "1.3rem",
    s: "1.6rem",
    m: "1.8rem",
    l: "2rem",
    xl: "2.4rem",
    xxl: "5.7rem",
  },

  breakpoints: {
    mini: `(min-width: ${mini}px)`,
    mobile: `(min-width: ${mobile}px)`,
    tablet: `(min-width: ${tablet}px)`,
    bigTablet: `(min-width: ${bigTablet}px)`,
    laptop: `(min-width: ${laptop}px)`,
    desktop: `(min-width: ${desktop}px)`,
  },
};
