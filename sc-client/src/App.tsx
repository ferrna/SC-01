import './app.css'
import { Footer } from './components/Footer/Footer'
import Header from './components/Header/Header'
import { Layout } from './components/Layout/Layout'

function App() {
  return (
    <div className="Body">
      <Header />
      <Layout />
      <Footer />
    </div>
  )
}

export default App