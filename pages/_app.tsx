import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const theme = extendTheme({
  colors: {
    yellow: {
      10: "#fffff0",
      200: "#fefcbf",
      300: "#faf089",
      400: "#f6e05e",
      500: "#ecc94b",
      600: "#d69e2e",
      700: "#b7791f",
      800: "#975a16",
      900: "#744210",
    },
  },
});

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      <ToastContainer
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        theme="light"
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </ChakraProvider>
  );
}

export default MyApp;
