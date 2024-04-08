import { Link, NavLink } from "react-router-dom";
import { v4 as uuid } from "uuid";

/** Component for rendering NavBar
 *
 * Props: dogData{}
 * State: none
 *
 * App -> { Nav, RouteList }
 *
 */


export default function Nav({ dogData }) {
    console.log(dogData);

    return (
        <nav className="Nav">
            {dogData.map(dog =><NavLink className="me-4" key={uuid()} to={`dogs/${dog.name}`} >{dog.name}</NavLink>)}
        </nav>
    );
}