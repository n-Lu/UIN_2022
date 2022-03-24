import { Routes, Route } from 'react-router-dom'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import Home from '../pages/Home'
import Product from '../pages/Product'
import Products from '../pages/Products'

export default function PageRoutes() {
  return (
    <>
      <Navigation />
      <Routes>
<<<<<<< HEAD
        <Route path="home" element={<Home />} />
=======
        <Route path="hjem" element={<Home />} />
>>>>>>> db6f002486db7dba35aae050636f36abf3144b37
        <Route path="produkter">
          <Route index element={<Products />} />
          <Route path=":id" element={<Product />} />
        </Route>
      </Routes>
      <Footer />
    </>
  )
}
