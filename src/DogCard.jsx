import React from "react";

/** Component for an individual Dog Card
 *
 * props: dogData => {name, src, age, facts}
 * state: none
 *
 *
 * DogList -> DogCard
*/

export default function DogCard({ dogData }) {
    const imagePath = `../public`;


    const { name, src, age, facts } = dogData;

    return (
        <div className="DogCard col-md-4">
            <img className="img-fluid"
                src={`${imagePath}/${src}.jpg`}
                alt={`picture of ${name}`} />
            <div>Name: {name}</div>
            <div>Age: {age}</div>
            <div>
                {facts.map((fact, idx) => (
                    <div key={idx}>{`Fun fact #${idx + 1}: ${fact}`}</div>
                ))}
            </div>
        </div>
    );
}