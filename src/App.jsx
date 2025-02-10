import { BrowserRouter } from 'react-router'
import Footer from './components/Footer'
import Header from './components/Header'
import AppRoutes from './routes/AppRoutes'
import './styles/App.scss'

function App() {

  return (
    <>
      <div className="app-container">
        <BrowserRouter basename='/Kasa-oc'>
          <Header />
          <div className="main-content">
            <AppRoutes />
          </div>
        </BrowserRouter>
      </div>
      <Footer />
    </>
  )
}

export default App
