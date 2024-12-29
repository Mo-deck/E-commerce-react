import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {

  return (
    <div className="max-w-4xl mx-auto pt-16">
    <Header />
    <Outlet />
    <Footer />
    </div>
  )
}

export default App
