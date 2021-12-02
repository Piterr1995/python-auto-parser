import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { AppContextProvider } from "contexts/AppContext";
import Navbar from "components/organisms/Navbar";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppContextProvider>
      {/* <Navbar /> */}
      <Component {...pageProps} />
    </AppContextProvider>
  );
}

export default appWithTranslation(MyApp);
