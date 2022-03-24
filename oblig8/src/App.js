import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import Actor from './components/Actor'
import Actors from './components/Actors'
import Home from './components/Home'
import Layout from './components/Layout'
import Movies from './components/Movies'
import Name from './components/Name'
import Navigation from './components/Navigation'

export default function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route element={<Layout />}>
          <Route path="about" element={<About />} />
          <Route path="hjem" element={<Home />} />
          <Route path="actors">
            <Route index element={<Actors />} />
            <Route path=":name" element={<Name />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}
