import '../styles/globals.scss';
import '@fortawesome/fontawesome-free/css/all.css';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;