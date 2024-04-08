import React, { useState } from "react";
import DogCard from "./DogCard"
import {v4 as uuid} from "uuid"


/** Component to show all dogs
 *
 * App -> DogList -> DogCard
 *
 */
export default function DogList({ dogs }) {
    console.log("dogData from DogList is", dogs);

    return (
        <div>
            <h1>Check out our dogs!</h1>
            <div>
                {dogs.map(dog => <DogCard dogData={dog} key={uuid()}/>)}
            </div>
        </div>
    );

}