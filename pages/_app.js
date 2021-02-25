import '../styles/index.css'
import splitbee from '@splitbee/web';

splitbee.init({
  scriptUrl: "/bee.js",
  apiUrl: "/_hive",
})

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}