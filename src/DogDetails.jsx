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
    const imagePath = `../public`;


    const dog = dogData.dogs.find(dog => dog.name.toLowerCase() === name.toLowerCase());

    if (!dog) return <p>No such dog: {name}</p>;
    console.log(dog)

    // return (
    //     <div className="DogDetails">
    //         <DogCard dogData={dog} />
    //         <Link to="/">GO BACK HOME</Link>
    //     </div>
    // );

    return (
        <div className="DogCard">
            <img className="img-fluid w-50 h-50 mt-3"
                src={`${imagePath}/${dog.src}.jpg`}
                alt={`picture of ${dog.name}`} />
            <div>Name: {dog.name}</div>
            <div>Age: {dog.age}</div>
            <div>
                {dog.facts.map((fact, idx) => (
                    <div key={idx}>{`Fun fact #${idx + 1}: ${fact}`}</div>
                ))}
            </div>
            <Link to="/">GO BACK HOME</Link>
        </div>
    );
}