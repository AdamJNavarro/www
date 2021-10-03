import '~/styles/tailwind.css';
import '~/styles/prose.css';

import MetaWrapper from '~/components/layout/MetaWrapper';
//import PlausibleProvider from "next-plausible";

function MyApp({ Component, pageProps }) {
  return (
    <MetaWrapper>
      {/* <PlausibleProvider domain="adamjnavarro.com"> */}
      <Component {...pageProps} />
      {/* </PlausibleProvider> */}
    </MetaWrapper>
  );
}

export default MyApp;
