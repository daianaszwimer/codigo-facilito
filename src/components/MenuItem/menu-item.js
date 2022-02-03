import "./menu-item.css"
import {Link} from "react-router-dom";

function MenuItem(props) {
  return (
    <li className="menu-item">
      <Link to={props.link}>
        {props.text}
      </Link>
    </li>
  )
}

export default MenuItem