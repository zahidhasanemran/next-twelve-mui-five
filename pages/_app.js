import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../styles/theme";
import { useEffect } from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  // return <Component {...pageProps} />
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>nextjs-mui</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }) => ({
  pageProps: {
    ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
    pathname: ctx.pathname,
  },
});

export default MyApp;
