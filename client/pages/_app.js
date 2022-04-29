import '../styles/globals.css'
import Layout from '../components/Layout'
import { wrapper } from '../redux/store.ts'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default wrapper.withRedux(MyApp)
