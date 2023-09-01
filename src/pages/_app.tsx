import '../components/home/home.css';
import '../components/nav/nav.css';
import '../components/about/about.css';
import '../components/sections/sections.css';
import '../components/education/education.css';
import '../styles/global.css'
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
  }
  
  export default MyApp;