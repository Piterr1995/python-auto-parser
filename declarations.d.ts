import "styled-components";

declare module "react-modal";
declare module "styled-components" {
  // interface Palette {
  //   green100: string;
  //   blue100: string;
  //   black100: string;
  //   black200: string;
  //   black300: string;
  //   bootstrapDark: string;
  //   red100: string;
  // }

  interface FontSize {
    xxs: string;
    xs: string;
    s: string;
    m: string;
    l: string;
    xl: string;
    xxl: string;
  }

  interface Breakpoints {
    mini: string;
    mobile: string;
    tablet: string;
    bigTablet: string;
    laptop: string;
    desktop: string;
  }
  export interface DefaultTheme {
    name: string;
    // palette: Palette;
    fontSize: FontSize;
    breakpoints: Breakpoints;
  }
}
