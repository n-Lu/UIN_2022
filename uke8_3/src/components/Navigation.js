import { NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
    <header>
      <nav>
        <a href="#" id="logo">
          Logo
        </a>
        <ul>
          <li>
<<<<<<< HEAD
            <NavLink to="home">Hjem</NavLink>
=======
            <NavLink to="hjem">Hjem</NavLink>
>>>>>>> db6f002486db7dba35aae050636f36abf3144b37
          </li>
          <li>
            <NavLink to="produkter">Produkter</NavLink>
          </li>
          <li>
            <a href="#">Tjenester</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
