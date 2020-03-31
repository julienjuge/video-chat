import "../styles/index.css";

import App from "../components/App";

const MyApp = props => {
  const { pageProps } = props;
  return (
    <>
      <App {...pageProps} />
    </>
  );
};

export default MyApp;
