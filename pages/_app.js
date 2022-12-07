import Navbar from '../components/Navbar'
import 'react-toastify/dist/ReactToastify.css';
import "../styles/globals.css"
function MyApp({ Component, pageProps }) {
  return(
  <>
<Navbar/>
<Component {...pageProps} />
  </>
  )  
}

export default MyApp
