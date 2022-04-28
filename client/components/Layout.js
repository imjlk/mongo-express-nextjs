import Header from './Header'
import SideNavBar from './SideNavBar'
import Footer from './Footer'

function Layout({ children }) {
  return (
    <>
      <Header />
      <SideNavBar>{children}</SideNavBar>
      <Footer />
    </>
  )
}

export default Layout
