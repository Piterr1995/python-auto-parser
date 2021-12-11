import { createGlobalStyle } from "styled-components";
import { darken } from "polished";

import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
    :root {
        --xxs: 0.9rem;
        --xs: 1.3rem;
        --s: 1.6rem;
        --m: 1.8rem;
        --l: 2rem;
        --xl: 2.4rem;
        --xxl: 5.7rem;

        --purple100: hsl(276, 84%, 66%);
        --grey100: 	hsl(0, 0%, 40%);
        --green100: hsl(171, 100%, 39%);
        --green200: hsl(145, 67%, 37%);
        --blue100: hsl(195, 67%, 50%);
        --cyan100: hsl(166, 72%, 49%);
        --black100: hsl(180, 14%, 22%);
        --black200: hsl(0, 0%, 19%);
        --black300: hsl(0, 0%, 20%);
        --bootstrapDark: hsl(210, 10%, 23%);
        --red100: hsl(0, 70%, 64%);
        --lightgray100: hsl(0, 0%, 96%);
        --normalPadding: 2rem;
     
 
    }
    * {
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-family: "Poppins";

      }

    html {
      font-size: 62.5%;

    }
    body {
      font-size: 1.6rem;
      letter-spacing: 0.5px;
      color: var(--black300);
      margin: 0;
      padding: 0;
    };

    h1 {
        font-weight: 700;
        font-size: var(--m);
        @media screen and (min-width: $bigTabletBreakpoint) {
          font-size: var(--l);
        }
        @media screen and (min-width: $desktopBreakpoint) {
          font-size: var(--xl);
        }
    };

    h2 {
      font-weight: 600;
      font-size: var(--s);
      color: var(--black200);

      @media screen and ${theme.breakpoints.bigTablet} {
        font-size: var(--m);
      }
      @media screen and (min-width: $desktopBreakpoint) {
        font-size: 1.8rem;
      }
    };
    p, span, i, ul, li, a, u {
      font-size: var(--xs);
      
      @media screen and ${theme.breakpoints.bigTablet} {
        font-size: var(--s);
      }
    }

    .text-blue {
      color: var(--blue100);
    };
    .text-center {
      text-align: center;
    }
    .gradient {
      background: var(--green100);
      background: -webkit-linear-gradient(
        to right,
       var(--green100),
        var(--blue100)
      ); /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(
        to right,
        var(--green100),
        var(--blue100)
      );
    };

    .no-space {
      margin: 0;
      padding: 0;
    }
    icon, svg {
      color: var(--green100);
    }
    
    input:not([type=checkbox]), textarea {
      border-radius: 5px;
      padding: 0.3rem 1rem;
      border: 1px solid black;
      &:focus {
        outline: 2px solid var(--green100);
        border-left: 1px solid var(--blue100);
        border-right: none;
        border-top: none;
        border-bottom: none;
      }
    }

    .error-message {
      color: red;
      margin: 0.3rem 0;
    }
    .shadow {
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }

    .container {
      padding: 0 2rem;

      @media screen and ${theme.breakpoints.bigTablet}{
        width: 1200px;
        margin: auto;
      }
    }

    .auth-form-wrapper {
      margin: auto;
      width: 85%;

      input {
        width: 100%;
        font-size: 1.3rem;
      }

      .auth-button {
        width: 50%;
      }
    };

    .shadow {
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    }
    .modal-additional-action {
      font-size: 1.45rem;
      margin-top: 1.5px;
      font-weight: 500;
      color: var(--green100);
      text-decoration: none;
      display: block;
      &:hover {
        cursor: pointer;
        color: ${darken(0.05, "hsl(171, 100%, 39%)")};
      }

    } 

   
`;
