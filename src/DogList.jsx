import React from "react";
import DogCard from "./DogCard";


/** Component to show all dogs
 *
 * Props: dogData => {name, src, age, facts}
 * State: none
 *
 * App -> DogList -> DogCard
 *
 */
export default function DogList({ dogs }) {

    return (
        <div className="Doglist">
            <h1>Check out our dogs!</h1>
            <div className="row">
                {dogs.map(dog => <DogCard dogData={dog} key={dog.id} />)}
            </div>
        </div>
    );

}