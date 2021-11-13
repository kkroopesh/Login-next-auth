import { Provider } from "next-auth/client";
// import { SessionProvider } from "next-auth/react";
import NavBar from '../components/nav-bar';

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
    {/* <> */}
      <NavBar />
      <Component {...pageProps} />
    {/* </> */}
    </Provider>
  )
}

export default MyApp
