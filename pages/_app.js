import "../styles/index.css";
import "antd/dist/antd.css";

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
