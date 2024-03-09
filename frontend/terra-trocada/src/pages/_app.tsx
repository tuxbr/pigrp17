// Para não precisar importar todas as vezes o bootstrap e as variáveis globais, centralizo aqui esses imports.
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;