import { Link } from "react-router-dom";
import SearchOrder from "../features /order/SearchOrder";


export default function Header() {
  return (
    <header>
        <Link to="/"  >LightDelivery</Link>
        <p className="pizza">HEADER</p>
        <SearchOrder />
    </header>
  )
}
