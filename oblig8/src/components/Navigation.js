import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <nav>
      <ul className="flex flex-row">
        <li className="pr-10 pl-10 pb-4 pt-4">
          <Link to="/hjem">Hjem</Link>
        </li>
        <li className="pb-4 pt-4 pr-10">
          <Link to="/about">(OM) Skuespillerne og filmer</Link>
        </li>
        <li className="pb-4 pt-4">
          <Link to="/actors">Das skuespeler</Link>
        </li>
      </ul>
    </nav>
  )
}
