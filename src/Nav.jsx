import { Link, NavLink } from "react-router-dom";
import { v4 as uuid } from "uuid";
import './App.css';

/** Component for rendering NavBar
 *
 * Props: dogData{name, age, src, facts}
 * State: none
 *
 * App -> { Nav, RouteList }
 *
 */


export default function Nav({ dogData }) {
// "me-4 NavBar-link text-light"
    return (
        <nav className="NavBar navbar navbar-dark bg-primary ">
            {dogData.map(dog => <NavLink
                className= "me-4 NavBar-link"
                    // {`me-4 NavBar-link ${({isActive}) ? "text-light" : "text-dark"}`}
                style={({isActive}) => {
                    console.log("active!!!!!")
                    return isActive ? {color: "black"} : {color: "white"};
                }}
                key={dog.id}
                to={`dogs/${dog.name}`} >{dog.name}
            </NavLink>)}
        </nav>
    );
}