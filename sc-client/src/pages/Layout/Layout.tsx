import { FC } from 'react'
import './layout.styles.css'

import Header from '../../components/Header/Header'
import Main from './Main/Main'
import Footer from '../../components/Footer/Footer'

interface LayoutProps {}

const Layout: FC<LayoutProps> = ({ }) => {
  return (
    <div id="page_layout">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
export default Layout;