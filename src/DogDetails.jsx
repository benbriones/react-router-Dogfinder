import { useParams, Link } from "react-router-dom";
import DogCard from "./DogCard";


/** Component to individual dog
 *
 * Props: dogData = {name, src, age, facts}
 * State: none
 *
 * App -> DogDetails
 *
 */

export default function DogDetails(dogData) {
    const { name } = useParams();

    const dog = dogData.dogs.find(dog => dog.name.toLowerCase() === name.toLowerCase());

    if (!dog) return <p>No such dog: {name}</p>;

    return (
        <div className="DogDetails">
            <DogCard dogData={dog} />
            <Link to="/">GO BACK HOME</Link>

        </div>
    );
}