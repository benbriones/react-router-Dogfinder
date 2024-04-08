import { Link, NavLink } from "react-router-dom";
import { v4 as uuid } from "uuid";

/** Component for rendering NavBar
 *
 * Props: dogData{name, age, src, facts}
 * State: none
 *
 * App -> { Nav, RouteList }
 *
 */


export default function Nav({ dogData }) {

    return (
        <nav className="Nav navbar navbar-dark bg-primary ">
            {dogData.map(dog => <NavLink className="me-4 text-light" key={dog.id} to={`dogs/${dog.name}`} >{dog.name}</NavLink>)}
        </nav>
    );
}